"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const root_1 = require("./root/root");
const token_1 = require("./jwt-token/token");
const controllers = [
    root_1.ROOT,
    token_1.TOKEN
];
exports.controllers = controllers;
