import React from "react";
import TaskCard from "./TaskCard";

export default function TaskColumn({ title, tasks, dispatch }) {
  const filteredTasks = tasks.filter((task) => task.status === title);

  return (
    <div
      className="column"
      style={{
        border: "1px solid black",
        width: "30%",
      }}
    >
      <h2 style={{ textAlign: "center", borderBottom: "1px solid black" }}>
        {title}
      </h2>

      <div style={{ padding: "10px" }}>
        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555" }}>
            No tasks in this stage.
          </p>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              index={index}
              dispatch={dispatch}
            />
          ))
        )}
      </div>
    </div>
  );
}
