import styles from "./ListFooter.module.scss";
import { Todo } from "../../@types/todo";
import ListFilter from "../ListFilter/ListFilter";
import { FilterChangeEventHandler } from "../../@types/filter";

type Props = { todos: Todo[]; onFilterChange: FilterChangeEventHandler };

function ListFooter({ todos, onFilterChange }: Props) {
    return (
        <li className={styles.ListFooter}>
            <p>{`${todos.length} items left`}</p>
            <ListFilter onFilterChange={onFilterChange} />
            <button type="button">Clear completed</button>
        </li>
    );
}

export default ListFooter;
