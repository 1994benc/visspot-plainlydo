import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * If the todo exists, update it. Otherwise, create it.
 * @param todo Todo to save
 */
export async function saveTodo(todo: Todo): Promise<Todo> {
  const existingTodo = await prisma.todo.findFirst({ where: { id: todo.id } });
  if (existingTodo) {
    return prisma.todo.update({ where: { id: todo.id }, data: todo });
  } else {
    return prisma.todo.create({ data: todo });
  }
}
