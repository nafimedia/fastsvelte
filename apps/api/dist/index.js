"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const rate_limit_1 = __importDefault(require("@fastify/rate-limit"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const env_1 = require("./config/env");
const auth_routes_1 = require("./modules/auth/auth.routes");
const users_routes_1 = require("./modules/users/users.routes");
const roles_routes_1 = require("./modules/roles/roles.routes");
const audit_logs_routes_1 = require("./modules/audit-logs/audit-logs.routes");
const notifications_routes_1 = require("./modules/notifications/notifications.routes");
const upload_routes_1 = require("./modules/upload/upload.routes");
const app = (0, fastify_1.default)({ logger: true });
async function main() {
    // Register CORS
    await app.register(cors_1.default, {
        origin: true,
        credentials: true,
    });
    // Register Cookies & JWT
    await app.register(cookie_1.default);
    await app.register(jwt_1.default, {
        secret: env_1.env.JWT_SECRET,
    });
    // Register Multipart File Upload
    await app.register(multipart_1.default, {
        limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    });
    // Rate Limiting
    await app.register(rate_limit_1.default, {
        max: 100,
        timeWindow: '1 minute',
    });
    // Swagger OpenAPI Docs
    await app.register(swagger_1.default, {
        openapi: {
            info: {
                title: 'Starter Kit API Documentation',
                description: 'Fastify + SvelteKit 5 + MySQL Starter Kit REST API',
                version: '1.0.0',
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
        },
    });
    await app.register(swagger_ui_1.default, {
        routePrefix: '/documentation',
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
        },
    });
    // Serve uploads directory
    const uploadsDir = path_1.default.resolve(__dirname, '../uploads');
    if (!fs_1.default.existsSync(uploadsDir)) {
        fs_1.default.mkdirSync(uploadsDir, { recursive: true });
    }
    // Health check route
    app.get('/health', async () => ({ status: 'ok', timestamp: new Date().toISOString() }));
    // Register Modules
    await app.register(auth_routes_1.authRoutes, { prefix: '/api/auth' });
    await app.register(users_routes_1.usersRoutes, { prefix: '/api/users' });
    await app.register(roles_routes_1.rolesRoutes, { prefix: '/api/roles' });
    await app.register(audit_logs_routes_1.auditLogsRoutes, { prefix: '/api/audit-logs' });
    await app.register(notifications_routes_1.notificationsRoutes, { prefix: '/api/notifications' });
    await app.register(upload_routes_1.uploadRoutes, { prefix: '/api/upload' });
    try {
        await app.listen({ port: env_1.env.PORT, host: env_1.env.HOST });
        console.log(`🚀 Fastify Server running on http://${env_1.env.HOST}:${env_1.env.PORT}`);
        console.log(`📚 Swagger OpenAPI Documentation available at http://localhost:${env_1.env.PORT}/documentation`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
main();
