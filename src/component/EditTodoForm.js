import React, { useState } from 'react';

const EditTodoForm = ({ task, updateTask }) => {
  const [value, setValue] = useState(task.task); // Initialize with the task text

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, value); // Call the update function on submit
  };

  return (
    <form onSubmit={handleSubmit} className="EditTodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">Update</button>
    </form>
  );
};

export default EditTodoForm;
