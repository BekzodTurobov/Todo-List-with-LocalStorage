import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import "./Todo.modal.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if ((value, description)) {
      addTodo(value, description);
      setValue("");
      setDescription("");
    }
  }

  return (
    <>
      <section className={classes.formBox}>
        <form onSubmit={handleSubmit}>
          <h1>Add New Todo</h1>
          <div className={classes.labelConteiner}>
            <input
              type="text"
              id="name"
              placeholder="Enter a title..."
              required
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <div className={classes.labelConteiner}>
            <textarea
              id="description"
              placeholder="Enter todo description..."
              rows="2"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className={classes.btnBox}>
            <button type="submit" className="btn">
              Add new todo
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
