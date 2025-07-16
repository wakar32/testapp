import React, { useReducer, useRef, useEffect } from "react";
// import "./styles.css";
import TaskBoard from "./components/TaskBoard";
import { taskReducer, initialState } from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();
  const escPressedOnce = useRef(false);

  const addTask = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: "ADD_TASK", payload: value });
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") {
        if (!escPressedOnce.current) {
          const confirm = window.confirm(
            "Are you sure you want to refresh? Your progress will be lost."
          );
          if (confirm) window.location.reload();
          escPressedOnce.current = true;
        } else {
          window.location.reload();
        }
      }
    };

    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const logData = tasks.map((t) => ({
        name: t.name,
        status: t.status,
        tags: t.tags,
      }));
      console.log(JSON.stringify(logData, null, 2));
    }, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="app" style={{ padding: "20px" }}>
      <div
        className="input-group"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          ref={inputRef}
          placeholder="Task name"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            cursor: "pointer",
            background: "#2d90f3c4",
          }}
        >
          Add
        </button>
      </div>

      <TaskBoard tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
