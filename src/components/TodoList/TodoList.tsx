import { useContext } from "react";
import { Todo } from "@typedefs/todo";
import { TodoElement, ListFooter } from "@components/index";
import TodoStateContext from "@contexts/todo-state";
import styles from "./TodoList.module.scss";

type Props = { todoList: Todo[] };

function TodoList({ todoList }: Props) {
    const todoStateContext = useContext(TodoStateContext);
    let filteredList: Todo[];

    switch (todoStateContext?.state.currentFilter) {
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
            <ListFooter todos={filteredList} />
        </ul>
    );
}

export default TodoList;
