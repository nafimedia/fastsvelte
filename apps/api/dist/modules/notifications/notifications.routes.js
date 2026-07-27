"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsRoutes = notificationsRoutes;
const database_1 = require("@starter-kit/database");
const auth_1 = require("../../middleware/auth");
async function notificationsRoutes(fastify) {
    fastify.addHook('preHandler', auth_1.authenticate);
    // 1. LIST NOTIFICATIONS FOR LOGGED IN USER
    fastify.get('/', async (request, reply) => {
        const userId = request.user?.userId;
        const notifications = await database_1.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        const unreadCount = await database_1.prisma.notification.count({
            where: { userId, isRead: false },
        });
        return reply.send({
            notifications,
            unreadCount,
        });
    });
    // 2. MARK AS READ
    fastify.put('/:id/read', async (request, reply) => {
        const { id } = request.params;
        const userId = request.user?.userId;
        await database_1.prisma.notification.updateMany({
            where: { id, userId },
            data: { isRead: true },
        });
        return reply.send({ message: 'Notification marked as read' });
    });
    // 3. MARK ALL AS READ
    fastify.put('/read-all', async (request, reply) => {
        const userId = request.user?.userId;
        await database_1.prisma.notification.updateMany({
            where: { userId, isRead: false },
            data: { isRead: true },
        });
        return reply.send({ message: 'All notifications marked as read' });
    });
}
