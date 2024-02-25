import { Router } from "express";
import Container from "typedi";
import { UserContainer } from "../../container/userContainer";
const route = Router();

export default (app: Router) => {
  app.use("/users", route);
  const container = new UserContainer();

  route.route("/signup").post(container.handleSignUp);
  route.route("/signin").post(container.handleSignIn);
};
