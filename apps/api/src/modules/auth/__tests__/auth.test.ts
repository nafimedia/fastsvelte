import { describe, it, expect } from 'vitest';
import { globalErrorHandler } from '../../../middleware/error-handler';
import { ZodError, z } from 'zod';

describe('API Global Error Handler & Validation Suite', () => {
  it('should format Zod validation errors into standard JSON format', () => {
    const schema = z.object({
      email: z.string().email('Format email tidak valid'),
      password: z.string().min(6, 'Password minimal 6 karakter'),
    });

    try {
      schema.parse({ email: 'invalid-email', password: '123' });
    } catch (err) {
      expect(err).toBeInstanceOf(ZodError);
      if (err instanceof ZodError) {
        let sentStatus = 0;
        let sentBody: any = null;

        const mockReply: any = {
          status: (code: number) => {
            sentStatus = code;
            return mockReply;
          },
          send: (body: any) => {
            sentBody = body;
            return mockReply;
          },
        };

        const mockRequest: any = {
          log: { error: () => {} },
        };

        globalErrorHandler(err, mockRequest, mockReply);

        expect(sentStatus).toBe(400);
        expect(sentBody.success).toBe(false);
        expect(sentBody.error.code).toBe('VALIDATION_ERROR');
        expect(sentBody.error.details.length).toBeGreaterThan(0);
      }
    }
  });

  it('should handle 401 Unauthorized status error', () => {
    let sentStatus = 0;
    let sentBody: any = null;

    const mockReply: any = {
      status: (code: number) => {
        sentStatus = code;
        return mockReply;
      },
      send: (body: any) => {
        sentBody = body;
        return mockReply;
      },
    };

    const mockRequest: any = {
      log: { error: () => {} },
    };

    const error: any = new Error('Token expired or missing');
    error.statusCode = 401;

    globalErrorHandler(error, mockRequest, mockReply);

    expect(sentStatus).toBe(401);
    expect(sentBody.success).toBe(false);
    expect(sentBody.error.code).toBe('UNAUTHORIZED');
  });
});
