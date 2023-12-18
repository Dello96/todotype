// src/types.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: Todo;
}

export interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number; // ID of the todo
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: number; // ID of the todo
}

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export interface RootState {
  todos: TodoState;
}
