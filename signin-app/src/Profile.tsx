import { createContext } from "react";
import GlobalProfile from "./GlobalProfile";


const initialContext: GlobalProfile = {
    email: "",
    setemail: () => {},
};
  

export const ProfileContext = createContext(initialContext);
