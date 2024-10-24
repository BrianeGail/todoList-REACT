import React, { useState } from 'react';
import Form from './Form'; // Form for adding new tasks
import { Todo } from './todo'; // Todo component for displaying tasks
import EditTodoForm from './EditTodoForm'; // Component for editing tasks

const TodoWrapper = () => {
  const [task, setTask] = useState(''); // State for managing the current task
  const [todos, setTodos] = useState([]); // State for managing the list of todos

  // Function to add a new todo
  const addTodo = (newTask) => {
    setTodos([...todos, { id: Date.now(), task: newTask, completed: false, isEditing: false }]);
    setTask(''); // Clear input after adding a todo
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
      <Form task={task} setTask={setTask} addTodo={addTodo} />
      
      <div className="todo-list">
        {todos.map((todo) => (
          todo.isEditing ? (
            <EditTodoForm
              key={todo.id}
              task={todo}
              updateTask={updateTask} // Pass the update function to EditTodoForm
            />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={() => deleteTodo(todo.id)}
              toggleComplete={() => toggleComplete(todo.id)}
              editTodo={() => editTodo(todo.id)} // Pass editTodo function
            />
          )
        ))}
      </div>
    </div>
  );
};

export default TodoWrapper;
