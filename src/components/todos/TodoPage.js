import axios from "axios";
import React, { useEffect, useReducer } from "react";
import todoReducer, {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  initialState,
} from "../../reducers/todosReducer";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { FETCH_TODOS_PENDING } from "./../../reducers/todosReducer";

export const TodoContext = React.createContext();

const TodoPage = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { loading, error } = state;

  useEffect(() => {
    const getTodos = async () => {
      dispatch({ type: FETCH_TODOS_PENDING });
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCH_TODOS_ERROR, payload: error.message });
      }
    };

    getTodos();
  }, []);

  return (
    <>
      <TodoContext.Provider value={{ state, dispatch }}>
        <AddTodo />
        {error}
        {loading && "loading..."}
        <ListTodo />
      </TodoContext.Provider>
    </>
  );
};

export default TodoPage;
