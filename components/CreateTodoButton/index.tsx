import React from "react";

export default function CreateTodoButton() {
  const onAddClick = async () => {};

  return (
    <form action="/api/todos/create?redirectOnSuccessTo=/" method="post">
      <input name="body" type="text" defaultValue={""} />
      <input
        type="checkbox"
        name="done"
        id="done"
        defaultChecked={false}
      />
      <button onClick={onAddClick}>Add item</button>
    </form>
  );
}
