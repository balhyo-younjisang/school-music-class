import express, { Router } from "express";
import UserRouter from "./userRouter";
import errorMiddleware from "../middlewares/errorMiddleware";

export default class ApiRouter {
  private _router: Router;
  private _userRouter: UserRouter;

  constructor() {
    this._router = express.Router();
    this._userRouter = new UserRouter();

    this.initializeRouter();
  }

  initializeRouter() {
    this._router.use("/user", this._userRouter.userRouter);
    this._router.use(errorMiddleware);
  }

  getRouters() {
    return this._router;
  }
}
