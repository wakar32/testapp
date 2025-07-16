import React, { useRef } from "react";

export default function TaskCard({ task, index, dispatch }) {
  const tagInput = useRef();

  const handleStatusChange = (e) => {
    dispatch({ type: "UPDATE_STATUS", index, payload: e.target.value });
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      const val = tagInput.current.value.trim();
      if (val && task.tags.length < 3) {
        dispatch({ type: "ADD_TAG", index, payload: val });
        tagInput.current.value = "";
      }
    }
  };

  const getStatusOptions = () => {
    if (task.status === "Todo") {
      return (
        <>
          <option value="Todo" disabled>
            Todo
          </option>
          <option value="Ongoing">Ongoing</option>
        </>
      );
    }
    if (task.status === "Ongoing") {
      return (
        <>
          <option value="Ongoing" disabled>
            Ongoing
          </option>
          <option value="Completed">Completed</option>
        </>
      );
    }
    return <option value="Completed">Completed</option>;
  };

  return (
    <div
      className="task-card"
      style={{ background: "#d1d1d1ff", border: "1px solid gray", margin: 10 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <strong>{task.name}</strong>
        </div>
        <button
          className="delete"
          onClick={() => dispatch({ type: "DELETE_TASK", index })}
        >
          ❌
        </button>
      </div>

      <select
        value={task.status}
        onChange={handleStatusChange}
        disabled={task.status === "Completed"}
      >
        {getStatusOptions()}
      </select>
      {task.tags.length < 3 && (
        <div>
          <input
            ref={tagInput}
            onKeyDown={addTag}
            placeholder="Add tag (max 3)"
          />
        </div>
      )}
      <div
        className="tags"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        {task.tags.map((tag, i) => (
          <div
            key={i}
            className="tag"
            style={{
              background: "#9c9c9cff",
              margin: 10,
              padding: 2,
              borderRadius: "10px",
              width: "fit-content",
            }}
          >
            {tag}
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                dispatch({ type: "REMOVE_TAG", index, payload: i })
              }
            >
              ×
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
