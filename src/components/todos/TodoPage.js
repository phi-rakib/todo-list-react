import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import todoList from "../../services/api";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todoList);
  }, []);

  const addTodo = (todo) => {
    todo.id = nanoid();
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <ListTodo
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </>
  );
};

export default TodoPage;
