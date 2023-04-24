import { Todo } from "@typedefs/todo";
import { ListFilter } from "@components/index";
import { useContext } from "react";
import TodoStateContext from "@contexts/todo-state";
import styles from "./ListFooter.module.scss";

type Props = { todos: Todo[] };

function ListFooter({ todos }: Props) {
    const context = useContext(TodoStateContext);

    return (
        <li className={styles.ListFooter}>
            <p>{`${todos.length} items left`}</p>
            <ListFilter />
            <button
                type="button"
                onClick={() => context?.dispatch({ type: "CLEAR" })}
            >
                Clear completed
            </button>
        </li>
    );
}

export default ListFooter;
