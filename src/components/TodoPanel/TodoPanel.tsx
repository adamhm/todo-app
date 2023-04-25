import { useContext, useMemo, useReducer } from "react";
import { ListFooter, TextBox, TodoList } from "@components/index";
import ThemeContext from "@contexts/theme";
import TodoStateContext from "@contexts/todo-state";
import { MoonIcon, SunIcon } from "@assets/icons";
import { Todo } from "@typedefs/todo";
import styles from "./TodoPanel.module.scss";
import todos from "../../data/todos.json";
import todoReducer from "../../state/todoReducer";

function TodoPanel() {
    const themeContext = useContext(ThemeContext);
    const [state, dispatch] = useReducer(todoReducer, {
        todos,
        lastId: todos.length,
        currentFilter: "all",
    });

    const addTodoHandler = (task: string) =>
        dispatch({ type: "ADD", payload: task });

    const todoStateContext = useMemo(() => ({ state, dispatch }), [state]);

    let filteredList: Todo[];

    switch (state.currentFilter) {
        case "active":
            filteredList = state.todos.filter((todo) => !todo.completed);
            break;
        case "completed":
            filteredList = state.todos.filter((todo) => todo.completed);
            break;
        default:
            filteredList = state.todos;
    }

    return (
        <TodoStateContext.Provider value={todoStateContext}>
            <article className={styles.TodoPanel}>
                <div>
                    <p>TODO</p>
                    <button type="button" onClick={themeContext?.toggleTheme}>
                        <img
                            src={
                                themeContext?.theme === "light"
                                    ? MoonIcon
                                    : SunIcon
                            }
                            alt=""
                        />
                    </button>
                </div>
                <TextBox onAddTodo={addTodoHandler} />
                <TodoList filteredList={filteredList} />
                <ListFooter filteredList={filteredList} />
            </article>
        </TodoStateContext.Provider>
    );
}

export default TodoPanel;
