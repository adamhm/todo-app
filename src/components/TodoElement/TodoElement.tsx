import { Todo } from "@typedefs/todo";
import { Checkbox } from "@components/index";
import styles from "./TodoElement.module.scss";

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
