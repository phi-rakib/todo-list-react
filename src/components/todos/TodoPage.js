import React, { useEffect, useReducer } from "react";
import todoReducer, { FETCH_TODOS } from "../../reducers/todosReducer";
import todoList from "../../services/api";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

export const TodoContext = React.createContext();

const TodoPage = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({ type: FETCH_TODOS, payload: todoList });
  }, []);

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <ListTodo />
      </TodoContext.Provider>
    </>
  );
};

export default TodoPage;
