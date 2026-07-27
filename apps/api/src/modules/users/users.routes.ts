import { FastifyInstance } from 'fastify';
import { prisma } from '@starter-kit/database';
import { authenticate } from '../../middleware/auth';
import { hasPermission } from '../../middleware/rbac';
import { hashPassword } from '../../services/hash';
import { createAuditLog } from '../../middleware/audit';

export async function usersRoutes(fastify: FastifyInstance) {
  fastify.addHook('preHandler', authenticate);

  // 1. LIST USERS WITH PAGINATION, SEARCH, FILTER
  fastify.get('/', { preHandler: [hasPermission('users:read')] }, async (request, reply) => {
    const { search, role, page = '1', limit = '10' } = request.query as any;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
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
      prisma.user.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        include: { role: true },
      }),
      prisma.user.count({ where }),
    ]);

    return reply.send({
      data: data.map((u: any) => ({
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
  fastify.post('/', { preHandler: [hasPermission('users:create')] }, async (request, reply) => {
    const { name, email, password, roleId, isActive } = request.body as any;

    if (!name || !email || !password || !roleId) {
      return reply.status(400).send({ message: 'Name, email, password, and roleId are required' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return reply.status(400).send({ message: 'Email already exists' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashPassword(password),
        roleId,
        isActive: isActive ?? true,
      },
      include: { role: true },
    });

    await createAuditLog({
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
  fastify.put('/:id', { preHandler: [hasPermission('users:update')] }, async (request, reply) => {
    const { id } = request.params as any;
    const { name, email, roleId, isActive, password } = request.body as any;

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }

    const dataToUpdate: any = {
      name,
      email,
      roleId,
      isActive,
    };

    if (password && password.trim() !== '') {
      dataToUpdate.passwordHash = hashPassword(password);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
      include: { role: true },
    });

    await createAuditLog({
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
  fastify.delete('/:id', { preHandler: [hasPermission('users:delete')] }, async (request, reply) => {
    const { id } = request.params as any;

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }

    if (user.isSystem) {
      return reply.status(400).send({ message: 'System users cannot be deleted' });
    }

    await prisma.user.delete({ where: { id } });

    await createAuditLog({
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
