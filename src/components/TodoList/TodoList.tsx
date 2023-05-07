import { Todo } from "@typedefs/todo";
import { TodoElement } from "@components/index";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "@contexts/theme";
import styles from "./TodoList.module.scss";

type Props = { filteredList: Todo[] };

const MAX_VISIBLE_ITEMS = 6;

function TodoList({ filteredList }: Props) {
    const { theme } = useContext(ThemeContext);
    const list = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const hasNewTodo = !!localStorage.getItem("newTodo");
        localStorage.removeItem("newTodo");

        if (hasNewTodo) {
            list.current?.lastElementChild?.scrollIntoView();
        }
    });

    const className =
        filteredList.length >= MAX_VISIBLE_ITEMS
            ? `${styles.TodoList} ${styles.full} ${styles[theme]}`
            : `${styles.TodoList} ${styles[theme]}`;

    return (
        <ul className={className} ref={list}>
            {filteredList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
