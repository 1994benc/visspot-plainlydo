// update todo

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async function updateTodo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (
      !["put", "patch", "delete"].includes(
        (req.method as string)?.toLowerCase()
      )
    ) {
      res.status(405).end("Method not allowed");
      return;
    }

    if (req.method === "delete") {
      const { id } = req.query;
      const todo = await prisma.todo.delete({
        where: {
          id: id as string,
        },
      });
      return res.status(200).json(todo);
    }

    const { body, done } = req.body;
    const todo = await prisma.todo.update({
      where: {
        id: req.query.id as string,
      },
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
