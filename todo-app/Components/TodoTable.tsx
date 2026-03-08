import { getTodo } from "@/actions/todo.actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { Badge } from "./ui/badge";
import TodoTableActions from "./TodoTableActions";
export default async function TodoTable() {
  const todo = await getTodo();
  console.log(todo);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>completed</TableHead>
          <TableHead>createdAt</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todo.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge className="text-center">Completed</Badge>
              ) : (
                <Badge className="text-center" variant="outline">Not Completed</Badge>
              )}
            </TableCell>
            <TableCell>{todo.createdAt.toDateString()}</TableCell>
            <TableCell className="flex gap-2 justify-end items-center">
              <TodoTableActions id={todo.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todo.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
