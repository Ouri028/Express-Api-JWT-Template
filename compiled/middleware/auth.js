"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = process.env;
const verifyToken = (req, res, next) => {
    const host = req.get("host");
    const origin = req.get("origin");
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (host !== "http://localhost" && origin !== "http://localhost") {
        if (!token) {
            return res.status(401).send({
                error: "ERROR",
                message: "A token is required for authentication"
            });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_SECRET);
            req.body.email = decoded;
        }
        catch (err) {
            return res.status(401).send({
                error: "AUTH_ERROR",
                message: "Invalid Token"
            });
        }
        return next();
    }
    else {
        return next();
    }
};
exports.default = verifyToken;
