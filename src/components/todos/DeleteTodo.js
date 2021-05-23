import React, { useContext } from "react";
import { DELETE_TODO } from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const DeleteTodo = ({ id }) => {
  const { dispatch } = useContext(TodoContext);

  const deleteTodo = (id) => dispatch({ type: DELETE_TODO, payload: id });

  return <button onClick={() => deleteTodo(id)}>Delete</button>;
};

export default DeleteTodo;
