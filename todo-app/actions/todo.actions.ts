"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTodo = async () => {
  return await prisma.todo.findMany();
};
export const AddTodo = async ({
  title,
  description,
  completed,
}: {
  title: string;
  description?: string | undefined;
  completed?: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title,
      description,
      completed,
    },
  });
};
export const UpdateTodo = async () => {};
export const DeleteTodo = async () => {};
