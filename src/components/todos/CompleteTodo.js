import React, { useContext } from "react";
import { COMPLETE_TODO } from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const CompleteTodo = ({ todo }) => {
  const { id, completed } = todo;
  const { dispatch } = useContext(TodoContext);

  const completeTodo = (id) => dispatch({ type: COMPLETE_TODO, payload: id });

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => completeTodo(id)}
    />
  );
};

export default CompleteTodo;
