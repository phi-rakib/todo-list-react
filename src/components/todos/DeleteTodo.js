import axios from "axios";
import React, { useContext } from "react";
import {
  DELETE_TODO_ERROR,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS,
} from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const DeleteTodo = ({ id }) => {
  const { dispatch } = useContext(TodoContext);

  const deleteTodo = (id) => {
    const todoDelete = async (id) => {
      dispatch({ type: DELETE_TODO_PENDING });
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
      } catch (error) {
        dispatch({ type: DELETE_TODO_ERROR, payload: error.message });
      }
    };
    todoDelete(id);
  };

  return <button onClick={() => deleteTodo(id)}>Delete</button>;
};

export default DeleteTodo;
