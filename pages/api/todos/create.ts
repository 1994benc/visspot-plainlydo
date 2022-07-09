import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
// NextJS API route handler for creating a todo
export default async function createTodo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.status(405).end("Method not allowed");
      return;
    }
    const { body, done } = req.body;
    const todo = await prisma.todo.create({
      data: {
        body: body,
        done: done === "on" ? true : false,
      },
    });

    const { redirectOnSuccessTo } = req.query;
    if (redirectOnSuccessTo) {
      return res.status(200).redirect(redirectOnSuccessTo as string);
    }
    return res.status(201).json(todo);
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
}
