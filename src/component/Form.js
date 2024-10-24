import React from 'react';

const Form = ({ addTodo, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (task) {
      addTodo(task); // Call addTodo with the current task
      setTask(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={task} // Bind the input value to the task state
        onChange={(e) => setTask(e.target.value)} // Update the task on input change
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default Form;
