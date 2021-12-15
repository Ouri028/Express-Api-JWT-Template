"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middleware/auth"));
const LOGIN = (0, express_1.Router)();
exports.LOGIN = LOGIN;
LOGIN.post("/user/login", auth_1.default, (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        return res.status(200).json({
            code: 200,
            success: true,
            message: "Login successful"
        });
    }
    else {
        return res.status(401).json({
            code: 401,
            success: false,
            message: "Invalid email or password"
        });
    }
});
