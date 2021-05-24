export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const ADD_TODO_PENDING = "ADD_TODO_PENDING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";
export const DELETE_TODO_PENDING = "DELETE_TODO_PENDING";
export const COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS";
export const COMPLETE_TODO_ERROR = "COMPLETE_TODO_ERROR";
export const COMPLETE_TODO_PENDING = "COMPLETE_TODO_PENDING";

export const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
    case ADD_TODO_PENDING:
    case DELETE_TODO_PENDING:
    case COMPLETE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        todos: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TODOS_ERROR:
      return {
        todos: [],
        loading: false,
        error: action.payload,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case ADD_TODO_ERROR:
    case DELETE_TODO_ERROR:
    case COMPLETE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
