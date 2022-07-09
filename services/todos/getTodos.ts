import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTodos(): Promise<Todo[]> {
  const todos = await prisma.todo.findMany();
  return todos;
}
