import { Todo } from "@typedefs/todo";
import { TodoElement } from "@components/index";
import styles from "./TodoList.module.scss";

type Props = { filteredList: Todo[] };

const MAX_VISIBLE_ITEMS = 6;

function TodoList({ filteredList }: Props) {
    const className =
        filteredList.length >= MAX_VISIBLE_ITEMS
            ? `${styles.TodoList} ${styles.full}`
            : styles.TodoList;

    return (
        <ul className={className}>
            {filteredList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
