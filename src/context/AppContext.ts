import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../models/User";

export interface ContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  token: string ;
  setToken: Dispatch<SetStateAction<string >>;
}

const defaultContext: ContextType = {
  user: null,
  setUser: () => {},
  token: "",
  setToken: () => {},
};

const AppContext = createContext<ContextType>(defaultContext);

export default AppContext;
