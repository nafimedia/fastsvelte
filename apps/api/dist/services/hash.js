"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const crypto_1 = __importDefault(require("crypto"));
const SALT = 'starter_kit_salt_2026';
function hashPassword(password) {
    return crypto_1.default.createHmac('sha256', SALT).update(password).digest('hex');
}
function comparePassword(password, hash) {
    return hashPassword(password) === hash;
}
