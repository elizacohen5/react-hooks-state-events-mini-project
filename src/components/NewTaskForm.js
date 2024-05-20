import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const taskObject = {
    text: newText,
    category: newCategory,
  };
  
  console.log(taskObject);

  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit(taskObject);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(event) => setNewText(event.target.value)}
          value={newText}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(event) => setNewCategory(event.target.value)}
          value={newCategory}
        >
          <option value="Select-Task">--Select Task--</option>
          <option value="All">{categories[0]}</option>
          <option value="Code">{categories[1]}</option>
          <option value="Food">{categories[2]}</option>
          <option value="Money">{categories[3]}</option>
          <option value="Misc">{categories[4]}</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
