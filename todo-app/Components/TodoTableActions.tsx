"use client";
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DeleteTodo } from "@/actions/todo.actions";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import EditTodoDialog from "./EditTodo";

export default function TodoTableActions({
  id,
  title,
  description,
  completed,
}: {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoDialog
        id={id}
        title={title}
        description={description}
        completed={completed}
      />
      <Button
        className="cursor-pointer text-zinc-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
        variant="ghost"
        size="icon"
        onClick={async () => {
          setLoading(true);
          await DeleteTodo({ idDelete: id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
}
