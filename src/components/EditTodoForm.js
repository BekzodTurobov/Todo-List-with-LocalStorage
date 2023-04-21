import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import "./Todo.modal.css";
import { useNavigate } from "react-router-dom";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [description, setDescription] = useState(task.theme);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    editTodo(value, description, task.id);
  }

  return (
    <>
      <section className={classes.formBox}>
        <form onSubmit={handleSubmit}>
          <h1>Edit Todo</h1>
          <div className={classes.labelConteiner}>
            <input
              type="text"
              id="name"
              placeholder="Edit a todo title..."
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
              placeholder="Edit todo description..."
              rows="2"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className={classes.btnBox}>
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn--alt"
            >
              Cancel
            </button>
            <button type="submit" className="btn">
              Update todo
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditTodoForm;
