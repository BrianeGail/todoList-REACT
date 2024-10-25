import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      {/* Checkbox to toggle task completion */}
      <input
        type="checkbox"
        checked={task.completed} // Checkbox state is linked to task completion status
        onChange={() => toggleComplete(task.id)} // Toggle completion on checkbox change
      />

      {/* Task description */}
      <p className={task.completed ? "completed" : ""}>
        {task.task}
      </p>

      {/* Edit and delete icons */}
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
