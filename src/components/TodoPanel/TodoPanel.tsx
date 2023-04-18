import { useContext } from "react";

import styles from "./TodoPanel.module.scss";
import moonIcon from "../../assets/icons/icon-moon.svg";
import sunIcon from "../../assets/icons/icon-sun.svg";
import ThemeContext from "../../contexts/theme-context";
import todos from "../../data/todos.json";
import TextBox from "../TextBox/TextBox";
import TodoList from "../TodoList/TodoList";
import todos from "../../data/todos";

function TodoPanel() {
    const context = useContext(ThemeContext);

    return (
        <article className={styles.TodoPanel}>
            <div>
                <p>TODO</p>
                <button type="button" onClick={context?.toggleTheme}>
                    <img
                        src={context?.theme === "light" ? moonIcon : sunIcon}
                        alt=""
                    />
                </button>
            </div>
            <TextBox />
            <TodoList todoList={todos} />
        </article>
    );
}

export default TodoPanel;
