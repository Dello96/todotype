import { TodoActionTypes, TodoAction, TodoState } from "../types";

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };

    case TodoActionTypes.TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case TodoActionTypes.DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
