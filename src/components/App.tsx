import { useMemo, useState } from "react";
import { Theme } from "../@types/theme";
import ThemeContext from "../contexts/theme-context";
import styles from "./App.module.scss";
import TodoPanel from "./TodoPanel";

function App() {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const context = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={context}>
            <div
                className={`${styles.App} ${
                    theme === "light" ? styles.light : styles.dark
                }`}
            >
                <TodoPanel />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
