import { KeyboardEventHandler, useContext, useRef } from "react";
import { Checkbox } from "@components/index";
import ThemeContext from "@contexts/theme";
import styles from "./TextBox.module.scss";

type Props = { onAddTodo: (task: string) => void };

function TextBox({ onAddTodo }: Props) {
    const { theme } = useContext(ThemeContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const keyDownHandler: KeyboardEventHandler = (e) => {
        if (e.key === "Enter" && inputRef.current) {
            localStorage.setItem("newTodo", "true");
            onAddTodo(inputRef.current.value.trim());
        }
    };

    return (
        <div className={`${styles.TextBox} ${styles[theme]}`}>
            <Checkbox />
            <input
                type="text"
                placeholder="Create a new todo..."
                onKeyDown={keyDownHandler}
                ref={inputRef}
            />
        </div>
    );
}

export default TextBox;
