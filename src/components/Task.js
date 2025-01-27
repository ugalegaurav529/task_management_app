// src/components/Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={() => onToggle(task.id)}>Toggle Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;