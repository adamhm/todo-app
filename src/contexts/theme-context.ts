import { createContext } from "react";
import { ThemeContextType } from "../@types/theme";

export default createContext<ThemeContextType | undefined>(undefined);
