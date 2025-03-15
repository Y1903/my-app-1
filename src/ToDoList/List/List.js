import React from 'react';
import Item from '../Item/Item';

const List = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default List;