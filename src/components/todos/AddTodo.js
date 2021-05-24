import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import {
  ADD_TODO_ERROR,
  ADD_TODO_PENDING,
  ADD_TODO_SUCCESS,
} from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);

  const initialState = { title: "", completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    todo.id = nanoid();

    const createTodo = async () => {
      dispatch({ type: ADD_TODO_PENDING });
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          todo
        );
        dispatch({ type: ADD_TODO_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: ADD_TODO_ERROR, payload: error.message });
      }
    };

    createTodo();

    setTodo(initialState);
  };

  const renderTodoForm = () => {
    return (
      <form>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleOnChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    );
  };

  return <>{renderTodoForm()}</>;
};

export default AddTodo;
