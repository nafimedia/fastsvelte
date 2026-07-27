"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesRoutes = rolesRoutes;
const database_1 = require("@starter-kit/database");
const auth_1 = require("../../middleware/auth");
const rbac_1 = require("../../middleware/rbac");
const audit_1 = require("../../middleware/audit");
async function rolesRoutes(fastify) {
    fastify.addHook('preHandler', auth_1.authenticate);
    // 1. LIST ROLES & PERMISSIONS
    fastify.get('/', { preHandler: [(0, rbac_1.hasPermission)('roles:read')] }, async (request, reply) => {
        const roles = await database_1.prisma.role.findMany({
            include: {
                permissions: {
                    include: { permission: true },
                },
            },
        });
        const allPermissions = await database_1.prisma.permission.findMany();
        return reply.send({
            roles: roles.map((r) => ({
                id: r.id,
                name: r.name,
                description: r.description,
                permissions: r.permissions.map((p) => p.permission.name),
            })),
            permissions: allPermissions,
        });
    });
    // 2. UPDATE ROLE PERMISSIONS
    fastify.put('/:id/permissions', { preHandler: [(0, rbac_1.hasPermission)('roles:manage')] }, async (request, reply) => {
        const { id } = request.params;
        const { permissionIds } = request.body;
        const role = await database_1.prisma.role.findUnique({ where: { id } });
        if (!role) {
            return reply.status(404).send({ message: 'Role not found' });
        }
        // Delete existing permissions for role
        await database_1.prisma.rolePermission.deleteMany({ where: { roleId: id } });
        // Insert new permissions
        if (permissionIds && permissionIds.length > 0) {
            await database_1.prisma.rolePermission.createMany({
                data: permissionIds.map((pId) => ({
                    roleId: id,
                    permissionId: pId,
                })),
            });
        }
        await (0, audit_1.createAuditLog)({
            userId: request.user?.userId,
            action: 'UPDATE_ROLE_PERMISSIONS',
            entity: 'Role',
            entityId: id,
            details: { roleName: role.name, count: permissionIds.length },
            ipAddress: request.ip,
        });
        return reply.send({ message: `Permissions updated for role ${role.name}` });
    });
}
