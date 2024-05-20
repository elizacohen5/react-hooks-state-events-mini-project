import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ taskList, setTaskList }) {

  const mappedTasks = taskList.map((task) => {
    const value = uuidv4();
    return (
      <Task
        key={value}
        text={task.text}
        category={task.category}
        setTaskList = {setTaskList}
        taskList = {taskList}
      />
    );
  });

  return <div className="tasks">{mappedTasks}</div>;
}

export default TaskList;
