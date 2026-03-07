import AddTodoDialog from "@/components/AddTodoDialog";
import { getTodo } from "@/actions/todo.actions";
export default async function Home() {
  const todo = await getTodo();
  console.log(todo);
  return (
    <div className=" p-4 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <h1 className=" text-center text-3xl font-bold underline">Todo App</h1>
      <AddTodoDialog />
      {todo.map((item) => (
        <div key={item.id} className=" flex items-center justify-between">
          <h1>{item.title}</h1>
          <p>{item.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}
