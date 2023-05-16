import { ListFilter } from "@components/index";
import ThemeContext from "@contexts/theme";
import { useContext } from "react";
import constructStyleClass from "@utils/construct-style-class";
import styles from "./TodoFilter.module.scss";

function TodoFilter() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={constructStyleClass(styles, "TodoFilter", theme)}>
            <ListFilter />
        </section>
    );
}

export default TodoFilter;
