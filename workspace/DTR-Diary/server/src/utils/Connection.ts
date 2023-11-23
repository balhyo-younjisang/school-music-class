import { FirebaseApp } from "@firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export class Connection {
  static firestoreDB: Firestore;
  static firestoreAuth: any;

  static getDBConnection(app: FirebaseApp) {
    Connection.firestoreDB = getFirestore(app);
  }

  static getAuthConnection(app: FirebaseApp) {
    Connection.firestoreAuth = getAuth(app);
  }
}
