"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuditLog = createAuditLog;
const database_1 = require("@starter-kit/database");
async function createAuditLog({ userId, action, entity, entityId, details, ipAddress, userAgent, }) {
    try {
        await database_1.prisma.auditLog.create({
            data: {
                userId,
                action,
                entity,
                entityId,
                details: details || {},
                ipAddress,
                userAgent,
            },
        });
    }
    catch (error) {
        console.error('❌ Failed to log audit event:', error);
    }
}
