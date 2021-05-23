import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "./TodoPage";

const TodoItem = ({ todo }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);
  const { id } = todo;
  return (
    <li className={todo.completed ? "job_done" : ""}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(id)}
      />
      {todo.name}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
