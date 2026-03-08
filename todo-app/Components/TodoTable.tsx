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
import { Badge } from "./ui/badge";
import TodoTableActions from "./TodoTableActions";
import { Inbox } from "lucide-react";

export default async function TodoTable() {
  const todo = await getTodo();
  console.log(todo);
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-zinc-50 dark:bg-zinc-800/50">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px] font-semibold text-zinc-900 dark:text-zinc-100">
              Title
            </TableHead>
            <TableHead className="font-semibold text-zinc-900 dark:text-zinc-100">
              Status
            </TableHead>
            <TableHead className="font-semibold text-zinc-900 dark:text-zinc-100">
              Date
            </TableHead>
            <TableHead className="text-right font-semibold text-zinc-900 dark:text-zinc-100">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todo.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={4} className="h-48 text-center">
                <div className="flex flex-col flex-1 items-center justify-center space-y-3">
                  <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    <Inbox className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 font-medium">
                    No todos found
                  </div>
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs mx-auto">
                    Get started by adding a new task to your list.
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            todo.map((todo) => (
              <TableRow
                key={todo.id}
                className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
              >
                <TableCell className="font-medium">{todo.title}</TableCell>
                <TableCell>
                  {todo.completed ? (
                    <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/25">
                      Completed
                    </Badge>
                  ) : (
                    <Badge
                      className="bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/25"
                      variant="outline"
                    >
                      Not Completed
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-zinc-500 dark:text-zinc-400">
                  {todo.createdAt.toDateString()}
                </TableCell>
                <TableCell className="flex gap-2 justify-end items-center">
                  <TodoTableActions id={todo.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        {todo.length > 0 && (
          <TableFooter className="bg-zinc-50/50 dark:bg-zinc-900">
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{todo.length}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
