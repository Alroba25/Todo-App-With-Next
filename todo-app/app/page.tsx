import AddTodoDialog from "@/components/AddTodoDialog";
import TodoTable from "@/components/TodoTable";
import { ListTodo } from "lucide-react";
import { ModeToggle } from "@/components/ToggleTheme";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <ListTodo size={28} />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
              Todo Master
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none">
              <AddTodoDialog />
            </div>
            <ModeToggle />
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full">
          <TodoTable />
        </main>
      </div>
    </div>
  );
}
