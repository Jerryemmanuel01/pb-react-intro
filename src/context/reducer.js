import { useReducer } from "react";

export const initialTask = [];

export const valueChangeFn = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment_by":
      return state + action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task,);
    default:
      return state;
  }
};
