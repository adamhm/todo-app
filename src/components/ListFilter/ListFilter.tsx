/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from "react";
import TodoStateContext from "@contexts/todo-state";
import Filter from "@typedefs/filter";
import styles from "./ListFilter.module.scss";

function ListFilter() {
    const context = useContext(TodoStateContext);

    const changeFilter = (filter: Filter) => {
        context?.dispatch({ type: "FILTER", payload: filter });
    };

    return (
        <div className={styles.ListFilter}>
            <form action="">
                <input
                    type="radio"
                    name="filter"
                    id="all"
                    onClick={() => changeFilter("all")}
                    defaultChecked
                />
                <label htmlFor="all">All</label>
                <input
                    type="radio"
                    name="filter"
                    id="active"
                    onClick={() => changeFilter("active")}
                />
                <label htmlFor="active">Active</label>
                <input
                    type="radio"
                    name="filter"
                    id="completed"
                    onClick={() => changeFilter("completed")}
                />
                <label htmlFor="completed">Completed</label>
            </form>
        </div>
    );
}

export default ListFilter;
