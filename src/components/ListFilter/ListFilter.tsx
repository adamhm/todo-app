/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from "./ListFilter.module.scss";

function ListFilter() {
    return (
        <div className={styles.ListFilter}>
            <form action="">
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all">All</label>
                <input type="radio" name="filter" id="active" />
                <label htmlFor="active">Active</label>
                <input type="radio" name="filter" id="completed" />
                <label htmlFor="completed">Completed</label>
            </form>
        </div>
    );
}

export default ListFilter;
