import { ChangeEventHandler, useContext } from "react";
import ThemeContext from "@contexts/theme";
import styles from "./Checkbox.module.scss";

type Props = {
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ checked = false, onChange }: Props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.Checkbox} ${styles[theme]}`}>
            <input
                type="checkbox"
                checked={checked}
                disabled={!onChange}
                onChange={onChange}
            />
            <span />
        </div>
    );
}

export default Checkbox;
