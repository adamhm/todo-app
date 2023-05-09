import { TodoAction, TodoState } from "@typedefs/state";
import { Todo } from "@typedefs/todo";
import exhaustiveCheck from "../utils/exhaustive-check";

function todoReducer(state: TodoState, action: TodoAction): TodoState {
    let todos: Todo[];
    let currentTodo: Todo | undefined;

    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.lastId + 1,
                        task: action.payload,
                        completed: false,
                    },
                ],
                lastId: state.lastId + 1,
            };

        case "FILTER":
            return {
                ...state,
                currentFilter: action.payload,
            };
        case "CLEAR":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };
        case "SETCOMPLETED":
            todos = [...state.todos];
            currentTodo = todos.find((todo) => todo.id === action.payload.id);
            if (currentTodo) currentTodo.completed = action.payload.completed;

            return {
                ...state,
                todos,
            };
        case "REMOVE":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return exhaustiveCheck(action);
    }
}

export default todoReducer;
