import { useState } from "react";
import { useOptimistic } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item optimistically (params: 1-state, 2-callback) and return array
  const [optimisticTodos, setOptimisticTodo] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }]
  );

  // Function to handle form submission and add todo item
  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");

    setOptimisticTodo(newTodo); // Optimistically add new todo

    // Simulate API call or async operation
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

    // After delay, update todos with actual API response or processing result
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false }, // Mark as not pending after operation completes
    ]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {optimisticTodos.map((todo, index) => ( // here we use "optimisticTodos" insted on "todos" state
        <div key={index}>
          {todo.text}
          {todo.pending && <span> (Adding...)</span>}
        </div>
      ))}
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
