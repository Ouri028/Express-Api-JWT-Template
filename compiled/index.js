"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const PORT = process.env.PORT || 3333;
server_1.server.listen(PORT, () => console.info(`[EXPRESS] Running on port ${PORT}`));
