import { Todo } from "@typedefs/todo";
import { FilterChangeEventHandler } from "@typedefs/filter";
import { ListFilter } from "@components/index";
import styles from "./ListFooter.module.scss";

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
