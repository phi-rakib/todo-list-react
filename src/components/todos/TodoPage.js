import { nanoid } from "nanoid";
import React, { useEffect, useReducer } from "react";
import todoReducer, {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  FETCH_TODOS,
} from "../../reducers/todosReducer";
import todoList from "../../services/api";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

export const TodoContext = React.createContext();

const TodoPage = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({ type: FETCH_TODOS, payload: todoList });
  }, []);

  const addTodo = (todo) => {
    todo.id = nanoid();
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const deleteTodo = (id) => dispatch({ type: DELETE_TODO, payload: id });

  const completeTodo = (id) => dispatch({ type: COMPLETE_TODO, payload: id });

  return (
    <>
      <TodoContext.Provider
        value={{ todos, addTodo, deleteTodo, completeTodo }}
      >
        <AddTodo />
        <ListTodo />
      </TodoContext.Provider>
    </>
  );
};

export default TodoPage;
