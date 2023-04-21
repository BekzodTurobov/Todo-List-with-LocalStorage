import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saveTodos);
  }, []);

  function addTodo(todo, description) {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        theme: description,
        completed: false,
        isEditing: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(todos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, theme, id) {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task, theme, isEditing: !todo.isEditing }
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} key={todo.id} editTodo={editTask} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
