import { Todo } from "@typedefs/todo";
import Filter from "@typedefs/filter";
import exhaustiveCheck from "./exhaustive-check";

export default function filterList(todos: Todo[], filter: Filter) {
    let filteredList: Todo[];

    switch (filter) {
        case "all":
            filteredList = todos;
            break;
        case "active":
            filteredList = todos.filter((todo) => !todo.completed);
            break;
        case "completed":
            filteredList = todos.filter((todo) => todo.completed);
            break;
        default:
            exhaustiveCheck(filter);
    }

    return filteredList;
}
