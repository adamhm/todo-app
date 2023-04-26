import { Todo } from "@typedefs/todo";
import { Checkbox } from "@components/index";
import { useContext } from "react";
import TodoStateContext from "@contexts/todo-state";
import { CrossIcon } from "@assets/icons";
import styles from "./TodoElement.module.scss";

type Props = { todo: Todo };

function TodoElement({ todo }: Props) {
    const context = useContext(TodoStateContext);

    return (
        <li className={styles.TodoElement}>
            <Checkbox
                checked={todo.completed}
                onChange={(e) =>
                    context?.dispatch({
                        type: "SETCOMPLETED",
                        payload: { id: todo.id, completed: e.target.checked },
                    })
                }
            />
            <p className={todo.completed ? styles.completed : styles.active}>
                {todo.task}
            </p>
            <button
                type="button"
                title="remove todo"
                aria-label="remove todo"
                onClick={() =>
                    context?.dispatch({
                        type: "REMOVE",
                        payload: todo.id,
                    })
                }
            >
                <img src={CrossIcon} alt="" />
            </button>
        </li>
    );
}

export default TodoElement;
