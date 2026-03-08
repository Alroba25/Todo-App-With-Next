import AddTodoDialog from "@/components/AddTodoDialog";
import TodoTable from "@/components/TodoTable";
import { ListTodo, LogOut } from "lucide-react";
import { ModeToggle } from "@/components/ToggleTheme";
import SortSelect from "@/components/SortSelect";
import { SignOutButton } from "@clerk/nextjs";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const value = searchParams.sort === "asc" ? "asc" : "desc";
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
              Todo App
            </h1>
          </div>
          <SortSelect />
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none">
              <AddTodoDialog />
            </div>
            <ModeToggle />
            <SignOutButton>
              <button className="flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl transition-all duration-200 font-medium border border-red-500/20 shadow-sm cursor-pointer whitespace-nowrap">
                <LogOut size={18} />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </SignOutButton>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full">
          <TodoTable sorting={value} />
        </main>
      </div>
    </div>
  );
}
