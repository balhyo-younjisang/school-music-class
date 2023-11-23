import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "body-parser";

export default class Loaders {
  static envConfig = () => {
    dotenv.config();
  };

  static firebaseConfig = () => {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };

    return initializeApp(config);
  };

  static moduleConfig = (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  };
}
