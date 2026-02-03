import  TodoList  from "./components/Todolist";
import {Todo} from "./components/types";


async function getTasks(): Promise<Todo[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5");
  if (!data.ok) throw new Error("Loading data error");
  return data.json();
}

export default async function Data() {
  const ApiTodos = await getTasks();
  console.log(ApiTodos);
  return <TodoList initialTodos={ApiTodos} />;
}