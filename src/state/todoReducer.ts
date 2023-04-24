import { TodoAction, TodoState } from "@typedefs/state";

function todoReducer(state: TodoState, action: TodoAction): TodoState {
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
        case "TOGGLE":
            // FIXME (toggle action)
            return state;
        default:
            return state;
    }
}

export default todoReducer;
