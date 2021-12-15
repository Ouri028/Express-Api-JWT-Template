"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middleware/auth"));
const ROOT = (0, express_1.Router)();
exports.ROOT = ROOT;
const config = process.env;
ROOT.get("/", auth_1.default, (req, res) => {
    return res.send({
        message: "Hello, World"
    }).status(200);
});
