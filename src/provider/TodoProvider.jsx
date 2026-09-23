import { useReducer } from "react";
import { initialTask, todoReducer } from "../context/reducer";
import { TodoContext } from "../context/TodoContext";

const TodoProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, initialTask);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
