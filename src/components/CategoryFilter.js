import React from "react";

function CategoryFilter({ categories, taskList, setTaskList }) {
  function handleClick(event) {
    event.target.className = "selected";
    const filteredTasks = taskList.filter((task) => {
      return task.category === event.target.value;
    });
    if (event.target.value != "All") {
      setTaskList(filteredTasks);
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} value={category} onClick={(event) => handleClick(event)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
