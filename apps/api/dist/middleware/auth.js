"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
async function authenticate(request, reply) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return reply.status(401).send({ message: 'Unauthorized: Token missing' });
        }
        const token = authHeader.substring(7);
        const decoded = request.server.jwt.verify(token);
        request.user = decoded;
    }
    catch (error) {
        return reply.status(401).send({ message: 'Unauthorized: Invalid or expired token' });
    }
}
