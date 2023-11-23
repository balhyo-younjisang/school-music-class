import express, { Router } from "express";
import UserController from "../controllers/userController";

export default class UserRouter {
  private _userController;
  public userRouter: Router;

  constructor() {
    this.userRouter = express.Router();
    this._userController = new UserController();
    this.initializeRoute();
  }

  private initializeRoute = () => {
    this.userRouter.post("/join", this._userController.join);
    this.userRouter.post("/login", this._userController.login);
  };
}
