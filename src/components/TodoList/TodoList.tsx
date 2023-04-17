import styles from "./TodoList.module.scss";
import { Todo } from "../../@types/todo";
import TodoElement from "../TodoElement/TodoElement";
import ListFooter from "../ListFooter/ListFooter";

type Props = { todoList: Todo[] };

function TodoList({ todoList }: Props) {
    return (
        <ul className={styles.TodoList}>
            {todoList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
            <ListFooter todos={todoList} />
        </ul>
    );
}

export default TodoList;
