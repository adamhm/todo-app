import { useMemo, useState } from "react";
import { Theme } from "../@types/theme";
import ThemeContext from "../contexts/theme-context";
import styles from "./App.module.scss";

function App() {
    const [theme, setTheme] = useState<Theme>("light");
    const context = useMemo(() => ({ theme, setTheme }), []);

    return (
        <ThemeContext.Provider value={context}>
            <div className={theme === "light" ? styles.light : styles.dark}>
                <p>Frontend Mentor Challenge | Todo App</p>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
