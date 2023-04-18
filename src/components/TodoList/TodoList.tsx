import { useState } from "react";
import styles from "./TodoList.module.scss";
import { Todo } from "../../@types/todo";
import { Filter } from "../../@types/filter";
import TodoElement from "../TodoElement/TodoElement";
import ListFooter from "../ListFooter/ListFooter";

type Props = { todoList: Todo[] };

function TodoList({ todoList }: Props) {
    const [currentFilter, setCurrentFilter] = useState<Filter>("all");

    let filteredList: Todo[];

    switch (currentFilter) {
        case "active":
            filteredList = todoList.filter((todo) => !todo.completed);
            break;
        case "completed":
            filteredList = todoList.filter((todo) => todo.completed);
            break;
        default:
            filteredList = [...todoList];
    }

    return (
        <ul className={styles.TodoList}>
            {filteredList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
            <ListFooter
                todos={filteredList}
                onFilterChange={(filter) => setCurrentFilter(filter)}
            />
        </ul>
    );
}

export default TodoList;
