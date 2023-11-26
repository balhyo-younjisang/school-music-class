import { createContext } from "react";

export interface Logged {
  email: string;
  loggedIn: boolean;
}

export const LoggedContext = createContext<Logged | undefined>(undefined);
