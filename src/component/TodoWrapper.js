import React, { useState } from 'react';
import Form from './Form'; // Import your `Form` component

const TodoWrapper = () => {
  const [task, setTask] = useState(''); // State for the current task
  const [todos, setTodos] = useState([]); // State for the list of todos

  // Function to add a new todo
  const addTodo = (newTask) => {
    setTodos([...todos, { id: Date.now(), task: newTask, completed: false }]);
  };

  return (
    <div className="TodoWrapper">
      {/* Pass addTodo, task, and setTask to the Form component */}
      <Form addTodo={addTodo} task={task} setTask={setTask} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWrapper;
