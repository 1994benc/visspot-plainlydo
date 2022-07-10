import { Todo } from "@prisma/client";
import styles from "./TodoList.module.css";
import { useTodos } from "../../services/todos/useTodos";
export function TodoList() {
  const { data: todos } = useTodos();
  return (
    <div className={styles.todoListContainer}>
      {(todos as Todo[])?.map((todo) => {
        return <input key={todo.id} value={todo.body} />;
      })}
    </div>
  );
}
