import styles from "../page.module.css";
import {Todo} from "./types";


interface TodoItemProps {
  todo: Todo;
  doneToggle: (id: number | string) => void;
  deleteTask: (id: number | string) => void;
}

export const TodoItem = ( {todo, doneToggle, deleteTask} :TodoItemProps)=>{
return (
    <li  className={styles.item}>
        <input type="checkbox" checked = {todo.completed} onChange = {() => doneToggle(todo.id) /*to prevent re renders anonymus call */} ></input>
        <span className={todo.completed ? styles.completedText : ""}>{todo.title}</span>
        <button className={styles.deleteBtn} onClick={() => deleteTask(todo.id)}><img className={styles.garbageIcon} src = "/garbage-svgrepo-com.svg" alt="Удалить"></img></button>
    </li>
  );
};
