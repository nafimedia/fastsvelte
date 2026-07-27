"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRoutes = uploadRoutes;
const auth_1 = require("../../middleware/auth");
const storage_1 = require("../../services/storage");
async function uploadRoutes(fastify) {
    fastify.addHook('preHandler', auth_1.authenticate);
    fastify.post('/', async (request, reply) => {
        const data = await request.file();
        if (!data) {
            return reply.status(400).send({ message: 'No file uploaded' });
        }
        const buffer = await data.toBuffer();
        const fileResult = await (0, storage_1.saveUploadedFile)(data.filename, buffer);
        return reply.send({
            message: 'File uploaded successfully',
            url: fileResult.url,
            filename: data.filename,
            mimetype: data.mimetype,
        });
    });
}
