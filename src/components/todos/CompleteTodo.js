import React, { useContext } from "react";
import { TodoContext } from "./TodoPage";

const CompleteTodo = ({ todo }) => {
  const { id, completed } = todo;
  const { completeTodo } = useContext(TodoContext);
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => completeTodo(id)}
    />
  );
};

export default CompleteTodo;
