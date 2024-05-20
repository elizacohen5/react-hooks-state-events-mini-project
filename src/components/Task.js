import React from "react";

function Task({ text, category, taskList, setTaskList }) {

  function handleDelete(name, category) {
    console.log(name + category);
    const updatedTasks = taskList.filter(
      (task) => task.text + task.category !== name + category
    );
    setTaskList(updatedTasks);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text, category)}>
        X
      </button>
    </div>
  );
}

export default Task;
