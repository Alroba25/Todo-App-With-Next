import TodoTable from "@/components/TodoTable";
import Navbar from "@/components/Navbar";
import { auth } from "@clerk/nextjs/server";
export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const value = searchParams.sort === "asc" ? "asc" : "desc";
  const {userId} = await auth();
  console.log(userId);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <Navbar />

        {/* Main Content */}
        <main className="w-full">
          <TodoTable sorting={value} />
        </main>
      </div>
    </div>
  );
}
