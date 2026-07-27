import { FastifyInstance } from 'fastify';
import { prisma } from '@starter-kit/database';
import { hashPassword, comparePassword } from '../../services/hash';
import { authenticate } from '../../middleware/auth';
import { createAuditLog } from '../../middleware/audit';
import { addEmailJob } from '../../services/queue';

export async function authRoutes(fastify: FastifyInstance) {
  // 1. LOGIN
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body as any;

    if (!email || !password) {
      return reply.status(400).send({ message: 'Email and password are required' });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        role: {
          include: {
            permissions: {
              include: { permission: true },
            },
          },
        },
      },
    });

    if (!user || !user.isActive) {
      return reply.status(401).send({ message: 'Invalid credentials or inactive account' });
    }

    const isValid = comparePassword(password, user.passwordHash);
    if (!isValid) {
      return reply.status(401).send({ message: 'Invalid credentials' });
    }

    const permissions = user.role.permissions.map((rp: any) => rp.permission.name);

    const accessToken = fastify.jwt.sign(
      {
        userId: user.id,
        email: user.email,
        roleId: user.roleId,
        roleName: user.role.name,
        permissions,
      },
      { expiresIn: '1d' }
    );

    const refreshToken = fastify.jwt.sign(
      { userId: user.id },
      { expiresIn: '7d' }
    );

    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    await createAuditLog({
      userId: user.id,
      action: 'USER_LOGIN',
      entity: 'Auth',
      ipAddress: request.ip,
      userAgent: request.headers['user-agent'],
    });

    return reply.send({
      message: 'Login successful',
      token: accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role.name,
        permissions,
        avatarUrl: user.avatarUrl,
      },
    });
  });

  // 2. REGISTER
  fastify.post('/register', async (request, reply) => {
    const { name, email, password } = request.body as any;

    if (!name || !email || !password) {
      return reply.status(400).send({ message: 'Name, email, and password are required' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return reply.status(400).send({ message: 'Email already registered' });
    }

    const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });
    if (!userRole) {
      return reply.status(500).send({ message: 'Default USER role not found' });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashPassword(password),
        roleId: userRole.id,
      },
    });

    await addEmailJob('send-welcome', { email, name });

    await createAuditLog({
      userId: newUser.id,
      action: 'USER_REGISTER',
      entity: 'Auth',
      ipAddress: request.ip,
    });

    return reply.status(201).send({
      message: 'User registered successfully',
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  });

  // 3. GET CURRENT USER (ME)
  fastify.get('/me', { preHandler: [authenticate] }, async (request, reply) => {
    const userId = request.user?.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: {
          include: {
            permissions: {
              include: { permission: true },
            },
          },
        },
      },
    });

    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }

    const permissions = user.role.permissions.map((rp: any) => rp.permission.name);

    return reply.send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role.name,
      permissions,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
    });
  });

  // 4. FORGOT PASSWORD
  fastify.post('/forgot-password', async (request, reply) => {
    const { email } = request.body as any;

    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      const resetUrl = `${process.env.WEB_URL || 'http://localhost:5173'}/reset-password?email=${encodeURIComponent(email)}`;
      await addEmailJob('send-reset-password', { email, resetUrl });
    }

    return reply.send({ message: 'If the email exists, a password reset link has been dispatched.' });
  });
}
