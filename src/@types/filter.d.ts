type Filter = "all" | "active" | "completed";

type FilterChangeEventHandler = (filter: Filter) => void;

export { Filter, FilterChangeEventHandler };
