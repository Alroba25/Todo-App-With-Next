import AddTodoDialog from "@/components/AddTodoDialog";
import TodoTable from "@/components/TodoTable";
export default function Home() {

  return (
    <div className=" p-4 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <h1 className=" text-center text-3xl font-bold underline">Todo App</h1>
      <AddTodoDialog />
      <TodoTable />
    </div>
  );
}
