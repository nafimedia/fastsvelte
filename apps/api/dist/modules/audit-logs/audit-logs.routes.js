"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogsRoutes = auditLogsRoutes;
const database_1 = require("@starter-kit/database");
const auth_1 = require("../../middleware/auth");
const rbac_1 = require("../../middleware/rbac");
async function auditLogsRoutes(fastify) {
    fastify.addHook('preHandler', auth_1.authenticate);
    fastify.get('/', { preHandler: [(0, rbac_1.hasPermission)('audit:read')] }, async (request, reply) => {
        const { page = '1', limit = '20', search } = request.query;
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const skip = (pageNum - 1) * limitNum;
        const where = {};
        if (search) {
            where.OR = [
                { action: { contains: search } },
                { entity: { contains: search } },
                { user: { name: { contains: search } } },
            ];
        }
        const [data, total] = await Promise.all([
            database_1.prisma.auditLog.findMany({
                where,
                skip,
                take: limitNum,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: { id: true, name: true, email: true },
                    },
                },
            }),
            database_1.prisma.auditLog.count({ where }),
        ]);
        return reply.send({
            data,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages: Math.ceil(total / limitNum),
            },
        });
    });
}
