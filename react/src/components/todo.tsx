import { useState } from "react";

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [input, setInput] = useState<string>("");

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleAdd = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);

    setInput("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;
  });

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2>Todo App</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          name=""
          className="border rounded-2xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="flex items-center gap-x-6">
        {["all", "active", "completed"].map((opt) => (
          <button
            type="button"
            className={`border ${filter === opt ? "border-red-500" : ""}`}
            value="all"
            onClick={() => setFilter(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {filteredTodos.map((todo) => (
        <div
          className="border rounded-2xl flex items-center gap-x-6 w-full"
          key={todo.id}
        >
          <input
            type="checkbox"
            name=""
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.text}
          </span>
          <button
            type="button"
            className="text-red-500"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
