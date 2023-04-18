/* eslint-disable jsx-a11y/label-has-associated-control */
import { FilterChangeEventHandler } from "@typedefs/filter";
import styles from "./ListFilter.module.scss";

type Props = { onFilterChange: FilterChangeEventHandler };

function ListFilter({ onFilterChange }: Props) {
    return (
        <div className={styles.ListFilter}>
            <form action="">
                <input
                    type="radio"
                    name="filter"
                    id="all"
                    onClick={() => onFilterChange("all")}
                    defaultChecked
                />
                <label htmlFor="all">All</label>
                <input
                    type="radio"
                    name="filter"
                    id="active"
                    onClick={() => onFilterChange("active")}
                />
                <label htmlFor="active">Active</label>
                <input
                    type="radio"
                    name="filter"
                    id="completed"
                    onClick={() => onFilterChange("completed")}
                />
                <label htmlFor="completed">Completed</label>
            </form>
        </div>
    );
}

export default ListFilter;
