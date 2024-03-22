import React from "react";

function Tasks({ savedTasks, handleRemove }) {
    console.log(savedTasks)
  return (
    <div>
      {savedTasks && (
        <ul className="task-container">
          {savedTasks.map((task, index) => (
            <li key={index}>
              <label className="container">
                <input type="checkbox" className="check-list" />
                <span className="checkmark">{task}</span>
              </label>

              <input
                className="delete-btn"
                type="button"
                value="delete"
                name={task}
                onClick={handleRemove}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
