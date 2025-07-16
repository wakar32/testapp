import React from "react";
import TaskColumn from "./TaskColumn";

export default function TaskBoard({ tasks, dispatch }) {
  const columns = ["Todo", "Ongoing", "Completed"];

  return (
    <div
      className="board"
      style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      {columns.map((col) => (
        <TaskColumn key={col} title={col} tasks={tasks} dispatch={dispatch} />
      ))}
    </div>
  );
}
