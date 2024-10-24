import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      {/* Task text with toggle completion */}
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)} // Toggle task completion
      >
        {task.task}
      </p>

      <div>
        {/* Edit and delete icons */}
        <FontAwesomeIcon 
          className="edit-icon" 
          icon={faPenToSquare} 
          onClick={() => editTodo(task.id)} // Edit task
        />
        <FontAwesomeIcon 
          className="delete-icon" 
          icon={faTrash} 
          onClick={() => deleteTodo(task.id)} // Delete task
        />
      </div>
    </div>
  );
};
