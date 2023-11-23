import express, { Application } from "express";
import Router from "./routes";
import Loaders from "./loaders";
import { Connection } from "./utils/Connection";

export class App {
  private app: Application;
  private router: Router;
  private PORT: string;
  private firebaseApp: any;

  constructor() {
    this.app = express();

    Loaders.envConfig();
    this.PORT = process.env.PORT!;

    this.firebaseApp = Loaders.firebaseConfig();

    Loaders.moduleConfig(this.app);

    Connection.getDBConnection(this.firebaseApp);
    Connection.getAuthConnection(this.firebaseApp);

    this.router = new Router();
    this.initializeRouters();
  }

  private initializeRouters() {
    this.app.use("/", this.router.getRouters());
  }

  startServer() {
    this.app.listen(this.PORT, () => {
      console.log(`YOUR SERVER IS LISTENING ON PORT ${this.PORT}`);
    });
  }
}

const app = new App();
app.startServer();
