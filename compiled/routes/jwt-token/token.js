"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TOKEN = (0, express_1.Router)();
exports.TOKEN = TOKEN;
const config = process.env;
TOKEN.post("/token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get user input
    const { email, password } = req.body;
    // Validate user input
    if (email && password) {
        if (email == config.TOKEN_USER && password == config.TOKEN_SECRET) {
            const token_user = process.env.TOKEN_USER;
            //Encrypt user password
            yield bcrypt_1.default.hash(password, 10).catch(err => console.error(err));
            // Create token
            const token = jsonwebtoken_1.default.sign({ email: email }, token_user, {
                expiresIn: "2h",
            });
            return res.status(200).json({
                success: true,
                code: 200,
                message: {
                    email: email,
                    token: token,
                }
            });
        }
        else {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "Required parameters { user: <String>, password: <String> }"
            });
        }
    }
    else {
        return res.status(400).json({
            success: false,
            code: 400,
            message: "Required parameters { user: <String>, password: <String> }"
        });
    }
}));
