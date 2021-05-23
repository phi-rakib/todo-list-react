import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  const { id } = todo;
  return (
    <li className={todo.completed ? "job_done" : ""}>
      <input type="checkbox" onChange={() => completeTodo(id)} />
      {todo.name}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
