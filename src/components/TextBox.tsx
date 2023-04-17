import styles from "./TextBox.module.scss";
import Checkbox from "./Checkbox/Checkbox";

function TextBox() {
    return (
        <div className={styles.TextBox}>
            <Checkbox />
            <input type="text" placeholder="Create a new todo..." />
        </div>
    );
}

export default TextBox;
