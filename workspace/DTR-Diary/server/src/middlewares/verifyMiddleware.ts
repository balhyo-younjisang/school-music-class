import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import HttpException from "../utils/HttpException";
import { IUserRequest } from "../@types/interface";
import JwtService from "../utils/JwtUtil";

const verifyMiddleware = (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userIdFromToken = JwtService.getUserIdFromRequest(req);
    req.decoded = userIdFromToken;

    return next();
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.message === "TokenExpireError") {
        throw new HttpException(419, "토큰이 만료되었습니다");
      }
      throw new HttpException(401, "유효하지 않은 토큰입니다");
    }
  }
};

export default verifyMiddleware;
