import { Request, Response } from "express";
import { IUserInput } from "../types/user";
import UserService from "../services/userService";
import HttpException from "../utils/HttpException";
import JwtService from "../utils/JwtUtil";
import { User } from "../models/User";

export default class UserController {
  private _userService = new UserService();

  join = async (req: Request, res: Response) => {
    try {
      const { email, password }: IUserInput = req.body;
      const newUser = await this._userService.addNewUser({ email, password });

      res.status(201).json(newUser);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new HttpException(500, err.message);
      }
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password }: IUserInput = req.body;
      const userData = await this._userService.findUser({ email, password });

      const userInstance = new User(userData?.email!);

      const userToken = await JwtService.createJWT(userInstance);

      res.status(201).json({ ...userInstance, token: userToken });
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new HttpException(500, err.message);
      }
    }
  };
}
