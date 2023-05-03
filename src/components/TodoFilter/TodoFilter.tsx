import { ListFilter } from "@components/index";
import ThemeContext from "@contexts/theme";
import { useContext } from "react";
import styles from "./TodoFilter.module.scss";

function TodoFilter() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${styles.TodoFilter} ${styles[theme]}`}>
            <ListFilter />
        </section>
    );
}

export default TodoFilter;
