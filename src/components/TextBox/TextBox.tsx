import { KeyboardEvent, KeyboardEventHandler, createRef } from "react";
import styles from "./TextBox.module.scss";
import Checkbox from "../Checkbox/Checkbox";

type Props = { onAddTodo: (task: string) => void };

function TextBox({ onAddTodo }: Props) {
    const inputRef = createRef<HTMLInputElement>();

    const keyDownHandler: KeyboardEventHandler = (e: KeyboardEvent) => {
        if (e.key === "Enter" && inputRef.current) {
            onAddTodo(inputRef.current.value.trim());
        }
    };

    return (
        <div className={styles.TextBox}>
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
