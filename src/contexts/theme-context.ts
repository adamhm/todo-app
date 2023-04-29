import { createContext } from "react";
import { ThemeContextType } from "@typedefs/theme";

export default createContext<ThemeContextType>({
    theme: "light",
    setTheme: undefined,
    toggleTheme: undefined,
});
