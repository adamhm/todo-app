import { useContext } from "react";

import styles from "./TodoPanel.module.scss";
import moonIcon from "../assets/icons/icon-moon.svg";
import sunIcon from "../assets/icons/icon-sun.svg";
import ThemeContext from "../contexts/theme-context";
import TextBox from "./TextBox";

function TodoPanel() {
    const context = useContext(ThemeContext);

    return (
        <article className={styles.TodoPanel}>
            <div>
                <p>TODO</p>
                <button type="button" onClick={context?.toggleTheme}>
                    <img
                        src={context?.theme === "light" ? moonIcon : sunIcon}
                        alt=""
                    />
                </button>
            </div>
            <TextBox />
        </article>
    );
}

export default TodoPanel;
