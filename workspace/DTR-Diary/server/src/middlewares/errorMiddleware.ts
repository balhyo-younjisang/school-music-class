import { NextFunction, Response, Request } from "express";

import HttpException from "../utils/HttpException";

/***  error를 던질 때 상태코드와 메세지를 설정하기 위한 미들웨어입니다.
 * @author yunjisang
 * @param error HttpException, 예외 처리를 위해 구현한 클래스
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`[ERROR] ${error}`);

  const status = error.status || 500;
  res.json({
    status,
    message: error.message,
  });
};

export default errorMiddleware;
