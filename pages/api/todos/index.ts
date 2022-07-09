import { PrismaClient, Todo } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function getTodos(): Promise<Todo[]> {
  const todos = await prisma.todo.findMany();
  return todos;
}

export default function getTodosFunc(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getTodos()
    .then((todos) => res.status(200).json(todos))
    .catch((e) => res.status(500).json({ error: e.message }));
}
