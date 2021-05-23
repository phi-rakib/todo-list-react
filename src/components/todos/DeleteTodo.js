import React, { useContext } from "react";
import { TodoContext } from "./TodoPage";

const DeleteTodo = ({ id }) => {
  const { deleteTodo } = useContext(TodoContext);
  return <button onClick={() => deleteTodo(id)}>Delete</button>;
};

export default DeleteTodo;
