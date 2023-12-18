// src/actions/todoActions.ts
import { Dispatch } from "redux";
import { TodoActionTypes, Todo } from "../types";

export const addTodo = (text: string) => (dispatch: Dispatch) => {
  const newTodo: Todo = {
    id: new Date().getTime(),
    text,
    completed: false,
  };

  dispatch({
    type: TodoActionTypes.ADD_TODO,
    payload: newTodo,
  });
};

export const toggleTodo = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: TodoActionTypes.TOGGLE_TODO,
    payload: id,
  });
};

export const deleteTodo = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: TodoActionTypes.DELETE_TODO,
    payload: id,
  });
};
