"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getTodo = async (
  sort: "asc" | "desc" = "desc",
  userId: string | null,
) => {
  return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: {
      createdAt: sort,
    },
  });
};
export const AddTodo = async ({
  title,
  description,
  completed,
  userId,
}: {
  title: string;
  description?: string | undefined;
  completed?: boolean;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      description,
      completed,
      user_id: userId as string,
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
