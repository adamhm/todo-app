import { motion } from "framer-motion";
import { Todo } from "@typedefs/todo";
import { Checkbox } from "@components/index";
import { useContext, useId } from "react";
import TodoStateContext from "@contexts/todo-state";
import { CrossIcon } from "@assets/icons";
import ThemeContext from "@contexts/theme";
import constructStyleClass from "@utils/construct-style-class";
import styles from "./TodoElement.module.scss";

type Props = { todo: Todo };

function TodoElement({ todo }: Props) {
    const todoStateContext = useContext(TodoStateContext);
    const { theme } = useContext(ThemeContext);
    const id = useId();

    return (
        <motion.li
            className={constructStyleClass(styles, "TodoElement", theme)}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
            layout
        >
            <Checkbox
                checked={todo.completed}
                labelId={id}
                onChange={(e) =>
                    todoStateContext?.dispatch({
                        type: "SETCOMPLETED",
                        payload: { id: todo.id, completed: e.target.checked },
                    })
                }
            />
            <p
                id={id}
                className={todo.completed ? styles.completed : styles.active}
            >
                {todo.task}
            </p>
            <button
                type="button"
                title="remove todo"
                aria-label="remove todo"
                onClick={() =>
                    todoStateContext?.dispatch({
                        type: "REMOVE",
                        payload: todo.id,
                    })
                }
            >
                <img src={CrossIcon} alt="" />
            </button>
        </motion.li>
    );
}

export default TodoElement;
