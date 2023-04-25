import { useContext } from "react";
import { Todo } from "@typedefs/todo";
import { TodoElement, ListFooter } from "@components/index";
import TodoStateContext from "@contexts/todo-state";
import styles from "./TodoList.module.scss";

type Props = { filteredList: Todo[] };

function TodoList({ todoList }: Props) {
    const todoStateContext = useContext(TodoStateContext);
    let filteredList: Todo[];

function TodoList({ filteredList }: Props) {

    return (
        <ul className={styles.TodoList}>
            {filteredList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
            <ListFooter todos={filteredList} />
        </ul>
    );
}

export default TodoList;
