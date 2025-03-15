import React from "react";

const Item = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <handler onClick={() => toggleTaskCompletion(task.id)}>{task.text}</handler>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default Item;
