import { TodoStateContext } from "@typedefs/state";
import { createContext } from "react";

export default createContext<TodoStateContext | undefined>(undefined);
