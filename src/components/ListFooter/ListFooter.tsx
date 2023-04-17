import styles from "./ListFooter.module.scss";
import { Todo } from "../../@types/todo";
import ListFilter from "../ListFilter/ListFilter";

type Props = { todos: Todo[] };

function ListFooter({ todos }: Props) {
    return (
        <li className={styles.ListFooter}>
            <p>{`${todos.length} items left`}</p>
            <ListFilter />
            <button type="button">Clear completed</button>
        </li>
    );
}

export default ListFooter;
