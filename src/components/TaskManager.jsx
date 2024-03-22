import React, { useState } from "react";
import Tasks from "./Tasks";

function TaskManager() {
  const [task, setTask] = useState("");
  const [savedTasks, setSavedTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedTasks([...savedTasks, task]);
    setTask("");
  };

  const handleRemove = (e) => {
    const updatedTasks = [
      ...savedTasks.filter((task) => task !== e.target.name),
    ];
    setSavedTasks(updatedTasks);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Daily Task Management</h1>
        <input
          type="text"
          value={task}
          placeholder="Task"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <Tasks savedTasks={savedTasks} handleRemove={handleRemove} />
    </>
  );
}

export default TaskManager;
