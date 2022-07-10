import { PrismaClient, Todo } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function getTodos(): Promise<Todo[]> {
  const todos = await prisma.todo.findMany();
  return todos;
}

export default async function getTodosFunc(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todos = await getTodos();
    console.log(todos);
    return res.status(200).json(todos);
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({ error: e?.message || "Something went wrong" });
  }
}
