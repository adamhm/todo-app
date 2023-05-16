import { ChangeEventHandler, useContext } from "react";
import ThemeContext from "@contexts/theme";
import constructStyleClass from "@utils/construct-style-class";
import styles from "./Checkbox.module.scss";

type Props = {
    checked?: boolean;
    labelId?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ checked = false, labelId, onChange }: Props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={constructStyleClass(styles, "Checkbox", theme)}>
            <input
                type="checkbox"
                checked={checked}
                disabled={!onChange}
                onChange={onChange}
                aria-labelledby={labelId}
            />
            <span />
        </div>
    );
}

export default Checkbox;
