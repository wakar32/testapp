export const initialState = [];

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { name: action.payload, status: "Todo", tags: [] }];
    case "DELETE_TASK":
      return state.filter((_, i) => i !== action.index);
    case "UPDATE_STATUS":
      return state.map((task, i) =>
        i === action.index ? { ...task, status: action.payload } : task
      );
    case "ADD_TAG":
      return state.map((task, i) =>
        i === action.index && task.tags.length < 3
          ? { ...task, tags: [...task.tags, action.payload] }
          : task
      );
    case "REMOVE_TAG":
      return state.map((task, i) =>
        i === action.index
          ? {
              ...task,
              tags: task.tags.filter((_, j) => j !== action.payload),
            }
          : task
      );
    default:
      return state;
  }
}
