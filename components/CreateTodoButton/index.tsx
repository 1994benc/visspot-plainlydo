import React from "react";
import { addBlankTodo } from "../../services/todos/addTodo";
import { refreshTodos } from "../../services/todos/useTodos";

export default function CreateTodoButton() {
  const itemRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const initialBody = itemRef.current?.value || "";
        await addBlankTodo(initialBody);
        refreshTodos();
      }}
    >
      <input ref={itemRef} type="text" placeholder="New item" />
      <button type="submit">Add item</button>
    </form>
  );
}
