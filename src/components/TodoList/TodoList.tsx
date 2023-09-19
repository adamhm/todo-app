import { motion } from "framer-motion";
import { Todo } from "@typedefs/todo";
import { TodoElement } from "@components/index";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "@contexts/theme";
import constructStyleClass from "@utils/construct-style-class";
import styles from "./TodoList.module.scss";

type Props = { filteredList: Todo[] };

const MAX_VISIBLE_ITEMS = 6;

function TodoList({ filteredList }: Props) {
    const { theme } = useContext(ThemeContext);
    const list = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const hasNewTodo = !!localStorage.getItem("newTodo");
        localStorage.removeItem("newTodo");

        if (hasNewTodo) {
            list.current?.lastElementChild?.scrollIntoView();
        }
    }, [filteredList]);

    const className = constructStyleClass(styles, "TodoList", theme, {
        full: filteredList.length >= MAX_VISIBLE_ITEMS,
    });

    return (
        <motion.ul
            className={className}
            ref={list}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate="visible"
        >
            {filteredList.map((todo) => (
                <TodoElement todo={todo} key={todo.id} />
            ))}
        </motion.ul>
    );
}

export default TodoList;
