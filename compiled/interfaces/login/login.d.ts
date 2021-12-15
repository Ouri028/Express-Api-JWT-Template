import { Request, Response } from "express";
interface LoginRequest extends Request {
    email: string;
    password: string;
}
interface LoginResponse extends Response {
    code: number;
    success: boolean;
    message: string;
}
export { LoginRequest, LoginResponse };
//# sourceMappingURL=login.d.ts.map