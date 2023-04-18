import { useState } from "react";
import { Todo } from "@typedefs/todo";
import { Filter } from "@typedefs/filter";
import styles from "./TodoList.module.scss";
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
                onFilterChange={(filter: Filter) => setCurrentFilter(filter)}
            />
        </ul>
    );
}

export default TodoList;
