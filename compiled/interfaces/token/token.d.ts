import { Response } from "express";
interface TokenRequest {
    email: string;
    password: string;
}
interface TokenResponse extends Response {
    success: boolean;
    code: number;
    message: {
        email: string;
        token: string;
    } | string;
}
export { TokenRequest, TokenResponse };
//# sourceMappingURL=token.d.ts.map