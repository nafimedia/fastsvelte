"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = hasPermission;
exports.hasRole = hasRole;
function hasPermission(requiredPermission) {
    return async (request, reply) => {
        if (!request.user) {
            return reply.status(401).send({ message: 'Unauthorized' });
        }
        const { roleName, permissions } = request.user;
        // Superadmin bypasses permission checks
        if (roleName === 'SUPER_ADMIN') {
            return;
        }
        if (!permissions || !permissions.includes(requiredPermission)) {
            return reply.status(403).send({
                message: `Forbidden: You lack required permission '${requiredPermission}'`,
            });
        }
    };
}
function hasRole(allowedRoles) {
    return async (request, reply) => {
        if (!request.user) {
            return reply.status(401).send({ message: 'Unauthorized' });
        }
        if (!allowedRoles.includes(request.user.roleName || '')) {
            return reply.status(403).send({
                message: `Forbidden: Requires one of roles: [${allowedRoles.join(', ')}]`,
            });
        }
    };
}
