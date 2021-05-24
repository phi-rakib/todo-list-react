import axios from "axios";
import React, { useContext } from "react";
import {
  COMPLETE_TODO_ERROR,
  COMPLETE_TODO_PENDING,
  COMPLETE_TODO_SUCCESS,
} from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const CompleteTodo = ({ todo }) => {
  const { id, completed } = todo;
  const { dispatch } = useContext(TodoContext);

  const completeTodo = (id, todo) => {
    const todoComplete = async (id, todo) => {
      try {
        dispatch({ type: COMPLETE_TODO_PENDING });
        todo.completed = !todo.completed;
        await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          todo
        );
        dispatch({ type: COMPLETE_TODO_SUCCESS, payload: todo });
      } catch (error) {
        dispatch({ type: COMPLETE_TODO_ERROR, payload: error.message });
      }
    };

    todoComplete(id, todo);
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => completeTodo(id, todo)}
    />
  );
};

export default CompleteTodo;
