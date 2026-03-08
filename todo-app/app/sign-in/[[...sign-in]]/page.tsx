import { SignIn } from "@clerk/nextjs";
import { ListTodo } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex flex-col justify-center items-center p-4 sm:p-8 font-sans">
      <div className="mb-8 flex items-center gap-3">
        <div className="p-3 bg-primary/10 text-primary rounded-xl shadow-sm backdrop-blur-xl border border-primary/20">
          <ListTodo size={32} />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
          Todo App
        </h1>
      </div>
      <div>
        <SignIn
          appearance={{
            elements: {
              card: "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl rounded-2xl",
              headerTitle: "text-zinc-900 dark:text-white font-bold",
              headerSubtitle: "text-zinc-500 dark:text-zinc-400",
              formButtonPrimary:
                "bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-xl",
              socialButtonsBlockButton:
                "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-all",
              socialButtonsBlockButtonText:
                "text-zinc-600 dark:text-zinc-300 font-semibold",
              formFieldInput:
                "bg-white/50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-primary rounded-xl",
              footerActionText: "text-zinc-600 dark:text-zinc-400",
              footerActionLink:
                "text-primary hover:text-primary/80 font-semibold",
              dividerLine: "bg-zinc-200 dark:bg-zinc-800",
              dividerText: "text-zinc-500 dark:text-zinc-400 text-sm",
            },
            layout: {
              socialButtonsVariant: "blockButton",
            },
          }}
          path="/sign-in"
          routing="path"
        />
      </div>
    </div>
  );
}
