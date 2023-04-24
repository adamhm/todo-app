import React from "react";
import Filter from "./filter";
import { Todo } from "./todo";

type TodoState = {
    todos: Todo[];
    lastId: number;
    currentFilter: Filter;
};

type TodoAction =
    | { type: "ADD"; payload: string }
    | { type: "FILTER"; payload: Filter }
    | { type: "CLEAR" }
    | { type: "SETCOMPLETED"; payload: { id: number; completed: boolean } };

type TodoStateContext = {
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
};

export { TodoState, TodoStateContext, TodoAction };
