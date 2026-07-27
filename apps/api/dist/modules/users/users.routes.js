"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = usersRoutes;
const database_1 = require("@starter-kit/database");
const auth_1 = require("../../middleware/auth");
const rbac_1 = require("../../middleware/rbac");
const hash_1 = require("../../services/hash");
const audit_1 = require("../../middleware/audit");
async function usersRoutes(fastify) {
    fastify.addHook('preHandler', auth_1.authenticate);
    // 1. LIST USERS WITH PAGINATION, SEARCH, FILTER
    fastify.get('/', { preHandler: [(0, rbac_1.hasPermission)('users:read')] }, async (request, reply) => {
        const { search, role, page = '1', limit = '10' } = request.query;
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const skip = (pageNum - 1) * limitNum;
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search } },
                { email: { contains: search } },
            ];
        }
        if (role) {
            where.role = { name: role };
        }
        const [data, total] = await Promise.all([
            database_1.prisma.user.findMany({
                where,
                skip,
                take: limitNum,
                orderBy: { createdAt: 'desc' },
                include: { role: true },
            }),
            database_1.prisma.user.count({ where }),
        ]);
        return reply.send({
            data: data.map((u) => ({
                id: u.id,
                name: u.name,
                email: u.email,
                role: u.role.name,
                roleId: u.roleId,
                isActive: u.isActive,
                isSystem: u.isSystem,
                createdAt: u.createdAt,
            })),
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages: Math.ceil(total / limitNum),
            },
        });
    });
    // 2. CREATE USER
    fastify.post('/', { preHandler: [(0, rbac_1.hasPermission)('users:create')] }, async (request, reply) => {
        const { name, email, password, roleId, isActive } = request.body;
        if (!name || !email || !password || !roleId) {
            return reply.status(400).send({ message: 'Name, email, password, and roleId are required' });
        }
        const existing = await database_1.prisma.user.findUnique({ where: { email } });
        if (existing) {
            return reply.status(400).send({ message: 'Email already exists' });
        }
        const user = await database_1.prisma.user.create({
            data: {
                name,
                email,
                passwordHash: (0, hash_1.hashPassword)(password),
                roleId,
                isActive: isActive ?? true,
            },
            include: { role: true },
        });
        await (0, audit_1.createAuditLog)({
            userId: request.user?.userId,
            action: 'CREATE_USER',
            entity: 'User',
            entityId: user.id,
            details: { email: user.email, role: user.role.name },
            ipAddress: request.ip,
        });
        return reply.status(201).send({ message: 'User created successfully', data: user });
    });
    // 3. UPDATE USER
    fastify.put('/:id', { preHandler: [(0, rbac_1.hasPermission)('users:update')] }, async (request, reply) => {
        const { id } = request.params;
        const { name, email, roleId, isActive, password } = request.body;
        const user = await database_1.prisma.user.findUnique({ where: { id } });
        if (!user) {
            return reply.status(404).send({ message: 'User not found' });
        }
        const dataToUpdate = {
            name,
            email,
            roleId,
            isActive,
        };
        if (password && password.trim() !== '') {
            dataToUpdate.passwordHash = (0, hash_1.hashPassword)(password);
        }
        const updatedUser = await database_1.prisma.user.update({
            where: { id },
            data: dataToUpdate,
            include: { role: true },
        });
        await (0, audit_1.createAuditLog)({
            userId: request.user?.userId,
            action: 'UPDATE_USER',
            entity: 'User',
            entityId: user.id,
            details: { email: updatedUser.email },
            ipAddress: request.ip,
        });
        return reply.send({ message: 'User updated successfully', data: updatedUser });
    });
    // 4. DELETE USER
    fastify.delete('/:id', { preHandler: [(0, rbac_1.hasPermission)('users:delete')] }, async (request, reply) => {
        const { id } = request.params;
        const user = await database_1.prisma.user.findUnique({ where: { id } });
        if (!user) {
            return reply.status(404).send({ message: 'User not found' });
        }
        if (user.isSystem) {
            return reply.status(400).send({ message: 'System users cannot be deleted' });
        }
        await database_1.prisma.user.delete({ where: { id } });
        await (0, audit_1.createAuditLog)({
            userId: request.user?.userId,
            action: 'DELETE_USER',
            entity: 'User',
            entityId: id,
            details: { email: user.email },
            ipAddress: request.ip,
        });
        return reply.send({ message: 'User deleted successfully' });
    });
}
