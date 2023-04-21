import { useMemo, useState } from "react";
import { Theme } from "@typedefs/theme";
import { TodoPanel } from "@components/index";
import ThemeContext from "@contexts/theme";
import styles from "./App.module.scss";

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
