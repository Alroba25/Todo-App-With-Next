import { ListTodo } from "lucide-react";
import SortSelect from "./SortSelect";
import AddTodoDialog from "./AddTodoDialog";
import { ModeToggle } from "./ToggleTheme";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Navbar() {
  const { userId } = await auth();
  return (
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
          <AddTodoDialog userId={userId} />
        </div>
        <ModeToggle />
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Show when="signed-out">
            <SignInButton />
          </Show>
        </header>
      </div>
    </div>
  );
}
