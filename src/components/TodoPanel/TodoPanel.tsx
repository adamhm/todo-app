import { useContext, useMemo, useReducer } from "react";
import { TextBox, TodoList } from "@components/index";
import ThemeContext from "@contexts/theme";
import TodoStateContext from "@contexts/todo-state";
import { MoonIcon, SunIcon } from "@assets/icons";
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
                <TodoList todoList={state.todos} />
            </article>
        </TodoStateContext.Provider>
    );
}

export default TodoPanel;
