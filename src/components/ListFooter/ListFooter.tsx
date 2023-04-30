import { Todo } from "@typedefs/todo";
import { ListFilter } from "@components/index";
import { useContext } from "react";
import TodoStateContext from "@contexts/todo-state";
import ThemeContext from "@contexts/theme";
import styles from "./ListFooter.module.scss";

type Props = { filteredList: Todo[] };

function ListFooter({ filteredList }: Props) {
    const context = useContext(TodoStateContext);
    const { theme } = useContext(ThemeContext);

    return (
        <li className={`${styles.ListFooter} ${styles[theme]}`}>
            <p>{`${filteredList.length} items left`}</p>
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
