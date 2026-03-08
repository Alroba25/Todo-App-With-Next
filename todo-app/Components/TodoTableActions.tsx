"use client";
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DeleteTodo } from "@/actions/todo.actions";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

export default function TodoTableActions({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        className="cursor-pointer text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
        variant="ghost"
        size="icon"
      >
        <Pen size={16} />
      </Button>
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
