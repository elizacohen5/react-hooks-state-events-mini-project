import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState([...TASKS]);

  function submitTaskForm(taskObj) {
    console.log(taskObj);
    setTaskList([...taskList, taskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} taskList={taskList} setTaskList={setTaskList} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={submitTaskForm} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
