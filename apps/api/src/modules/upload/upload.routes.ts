import { FastifyInstance } from 'fastify';
import { authenticate } from '../../middleware/auth';
import { saveUploadedFile } from '../../services/storage';

export async function uploadRoutes(fastify: FastifyInstance) {
  fastify.addHook('preHandler', authenticate);

  fastify.post('/', async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ message: 'No file uploaded' });
    }

    const buffer = await data.toBuffer();
    const fileResult = await saveUploadedFile(data.filename, buffer);

    return reply.send({
      message: 'File uploaded successfully',
      url: fileResult.url,
      filename: data.filename,
      mimetype: data.mimetype,
    });
  });
}
