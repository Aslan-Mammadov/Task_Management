import React from 'react'

function Tasks({savedTasks, handleRemove}) {
  return (
    <div>
       {savedTasks && (
        <ul>
          {savedTasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              {task}
              <input
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
  )
}

export default Tasks
