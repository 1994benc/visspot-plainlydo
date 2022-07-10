export async function addBlankTodo(initialBody: string = "") {
  const apiEndpoint = "/api/todos/create";
  const body = {
    body: initialBody,
    done: false,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(apiEndpoint, options);
  const todo = await response.json();
  return todo;
}
