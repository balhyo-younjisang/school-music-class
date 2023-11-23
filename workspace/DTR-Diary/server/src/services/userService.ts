import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUserInput } from "../types/user";
import { Connection } from "../utils/Connection";
import HttpException from "../utils/HttpException";

export default class UserService {
  addNewUser = async (param: IUserInput): Promise<User | null> => {
    const { email, password } = param;

    try {
      const newUser = await createUserWithEmailAndPassword(
        Connection.firestoreAuth,
        email,
        password
      );

      return newUser.user;
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new HttpException(500, err.message);
      }
    }

    return null;
  };

  findUser = async (param: IUserInput): Promise<User | null> => {
    const { email, password } = param;

    try {
      const user = await signInWithEmailAndPassword(
        Connection.firestoreAuth,
        email,
        password
      );

      return user.user;
    } catch (err: unknown) {
      if (err instanceof Error) throw new HttpException(500, err.message);
    }

    return null;
  };
}
