import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoPage";

const ListTodo = () => {
  const { todos } = useContext(TodoContext);

  const renderTodos = todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <ul>{renderTodos}</ul>
    </div>
  );
};

export default ListTodo;
