import { useContext, useState } from "react";
import { Todo } from "@typedefs/todo";
import { TextBox, TodoList } from "@components/index";
import ThemeContext from "@contexts/theme";
import moonIcon from "@assets/icons/icon-moon.svg";
import sunIcon from "@assets/icons/icon-sun.svg";
import styles from "./TodoPanel.module.scss";
import todos from "../../data/todos.json";

function TodoPanel() {
    const context = useContext(ThemeContext);
    const [todoList, setTodoList] = useState<Todo[]>(todos);
    const [lastId, setLastId] = useState<number>(todos.length);

    const addTodoHandler = (task: string) => {
        setTodoList((prevTodos) => [
            ...prevTodos,
            { id: lastId + 1, task, completed: false },
        ]);
        setLastId((prevId) => prevId + 1);
    };

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
            <TextBox onAddTodo={addTodoHandler} />
            <TodoList todoList={todoList} />
        </article>
    );
}

export default TodoPanel;
