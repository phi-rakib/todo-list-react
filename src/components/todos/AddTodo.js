import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { ADD_TODO } from "../../reducers/todosReducer";
import { TodoContext } from "./TodoPage";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const initialState = { name: "", completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    todo.id = nanoid();
    dispatch({ type: ADD_TODO, payload: todo });
    setTodo(initialState);
  };

  const renderTodoForm = () => {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={todo.name}
          onChange={handleOnChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    );
  };

  return <>{renderTodoForm()}</>;
};

export default AddTodo;
