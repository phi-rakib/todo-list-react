import React from "react";
import TodoItem from "./TodoItem";

const ListTodo = ({ todos, deleteTodo, completeTodo }) => {
  const renderTodos = todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <ul>{renderTodos}</ul>
    </div>
  );
};

export default ListTodo;
