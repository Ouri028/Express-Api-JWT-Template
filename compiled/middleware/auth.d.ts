import { Request, Response, NextFunction } from "express";
declare const verifyToken: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default verifyToken;
//# sourceMappingURL=auth.d.ts.map