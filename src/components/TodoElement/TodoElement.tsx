import styles from "./TodoElement.module.scss";
import { Todo } from "../../@types/todo";
import Checkbox from "../Checkbox/Checkbox";

type Props = { todo: Todo };

function TodoElement({ todo }: Props) {
    return (
        <li className={styles.TodoElement}>
            <Checkbox checked={todo.completed} />
            <p className={todo.completed ? styles.completed : styles.active}>
                {todo.task}
            </p>
        </li>
    );
}

export default TodoElement;
