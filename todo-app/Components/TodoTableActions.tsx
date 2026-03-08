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
      <Button className="cursor-pointer" variant="outline">
        <Pen size={16} />
      </Button>
      <Button
        className="cursor-pointer"
        variant="destructive"
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
