import React from "react";
import Filter from "./filter";
import { Todo } from "./todo";

type TodoState = {
    todos: Todo[];
    lastId: number;
    currentFilter: Filter;
};

type TodoStateContext = {
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
};

type Action<T, P> = {
    type: T;
    payload: P;
};

type TodoAction =
    | Action<"ADD", string>
    | Action<"FILTER", Filter>
    | Action<"CLEAR">
    | Action<"TOGGLE", number>;

export { TodoState, TodoStateContext, TodoAction };
