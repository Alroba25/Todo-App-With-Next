"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const getTodo = async (sort: "asc" | "desc" = "desc") => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: sort,
    },
  });
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
  revalidatePath("/");
};
export const UpdateTodo = async (
  id: string,
  title: string,
  description: string,
  completed: boolean,
) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });
  revalidatePath("/");
};
export const DeleteTodo = async (id: { idDelete: string }) => {
  const { idDelete } = id;
  await prisma.todo.delete({
    where: {
      id: idDelete,
    },
  });
  revalidatePath("/");
};
