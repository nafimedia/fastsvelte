"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
exports.sendEmail = sendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../config/env");
exports.transporter = nodemailer_1.default.createTransport({
    host: env_1.env.SMTP_HOST,
    port: env_1.env.SMTP_PORT,
    secure: false,
    auth: env_1.env.SMTP_USER ? { user: env_1.env.SMTP_USER, pass: env_1.env.SMTP_PASS } : undefined,
});
async function sendEmail({ to, subject, html }) {
    try {
        const info = await exports.transporter.sendMail({
            from: env_1.env.SMTP_FROM,
            to,
            subject,
            html,
        });
        console.log(`📧 Email sent to ${to}: ${info.messageId}`);
        return true;
    }
    catch (error) {
        console.error('❌ Failed to send email:', error);
        return false;
    }
}
