import { User } from "./../models/User";
import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default class JwtService {
  static getUserIdFromRequest = (req: Request): string | null => {
    const token = this.extractTokenFromRequest(req);
    if (!token) {
      return null;
    }
    const jwtPayload = this.decodeJWT(token);
    return (jwtPayload as any)?._id || null;
  };

  /***
   * @description Request 객체를 인자로 받아 헤더에서 토큰을 분리하여 반환
   */
  static extractTokenFromRequest = (req: Request): string | undefined => {
    const prefix = "Bearer ";
    const auth = req.headers.authorization;
    const token = auth?.includes(prefix) ? auth.split(prefix)[1] : auth;

    return token;
  };

  static decodeJWT = (token: string) => {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
      return decodedToken;
    } catch (err: unknown) {
      return null;
    }
  };

  static createJWT = async (user: User): Promise<String> => {
    const token = jwt.sign({ _id: user.email }, process.env.JWT_SECRET!);
    return token;
  };
}
