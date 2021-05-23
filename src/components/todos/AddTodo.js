import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoPage";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const initialState = { name: "", completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const todoAdd = (event) => {
    event.preventDefault();
    addTodo(todo);
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
        <button onClick={todoAdd}>Add Todo</button>
      </form>
    );
  };

  return <>{renderTodoForm()}</>;
};

export default AddTodo;
