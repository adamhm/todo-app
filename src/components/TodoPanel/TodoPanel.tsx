import { useCallback, useContext, useMemo, useReducer } from "react";
import { ListFooter, TextBox, TodoFilter, TodoList } from "@components/index";
import ThemeContext from "@contexts/theme";
import TodoStateContext from "@contexts/todo-state";
import { MoonIcon, SunIcon } from "@assets/icons";
import useMobileView from "@hooks/use-mobile-view";
import todos from "@data/todos.json";
import todoReducer from "@state/todoReducer";
import filterList from "@utils/filter-list";
import styles from "./TodoPanel.module.scss";

function TodoPanel() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [state, dispatch] = useReducer(todoReducer, {
        todos,
        lastId: todos.length,
        currentFilter: "all",
    });
    const isMobileView = useMobileView(768);

    const addTodoHandler = useCallback(
        (task: string) => dispatch({ type: "ADD", payload: task }),
        [dispatch]
    );

    const todoStateContext = useMemo(() => ({ state, dispatch }), [state]);

    const filteredList = filterList(state.todos, state.currentFilter);

    return (
        <TodoStateContext.Provider value={todoStateContext}>
            <article className={styles.TodoPanel}>
                <div>
                    <h1>TODO</h1>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="change theme"
                    >
                        <img
                            src={theme === "light" ? MoonIcon : SunIcon}
                            alt=""
                        />
                    </button>
                </div>
                <TextBox onAddTodo={addTodoHandler} />
                <TodoList filteredList={filteredList} />
                <ListFooter filteredList={filteredList} />
                {isMobileView && <TodoFilter />}
            </article>
        </TodoStateContext.Provider>
    );
}

export default TodoPanel;
