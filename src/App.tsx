import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoCard";

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
