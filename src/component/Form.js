import React from 'react';

const Form = ({ task, setTask, addTodo }) => { // Destructure props
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (task) {
      addTodo(task); // Add the task
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
