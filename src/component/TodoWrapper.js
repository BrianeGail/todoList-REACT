import React, { useState } from "react";
import Form from "./Form"; // Form for adding new tasks
import { Todo } from "./todo"; // Todo component for displaying tasks
import EditTodoForm from "./EditTodoForm"; // Component for editing tasks

const TodoWrapper = () => {
  const [task, setTask] = useState(""); // State for managing the current task
  const [todos, setTodos] = useState([]); // State for managing the list of todos
  const [filter, setFilter] = useState("all"); // Default filter is 'all'

  const getFilteredTodos = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "incomplete") return todos.filter((todo) => !todo.completed);
    return todos; // 'all' filter returns the complete list
  };

  // Function to add a new todo
  const addTodo = (newTask) => {
    setTodos([
      ...todos,
      { id: Date.now(), task: newTask, completed: false, isEditing: false }
    ]);
    setTask(''); // Clear input after adding a todo
    setFilter("all"); // Ensure the view remains set to 'all' after adding
  };
  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle complete/incomplete status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to set a todo as being edited
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to update the task after editing
  const updateTask = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <div className="filter-controls">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`filter-btn ${filter === "incomplete" ? "active" : ""}`}
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
      </div>

      <Form task={task} setTask={setTask} addTodo={addTodo} />

      <div className="todo-list">
        {getFilteredTodos().map((todo) =>
          todo.isEditing ? (
            <EditTodoForm
              key={todo.id}
              task={todo}
              updateTask={updateTask} 
            />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={() => deleteTodo(todo.id)}
              toggleComplete={() => toggleComplete(todo.id)}
              editTodo={() => editTodo(todo.id)} 
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
