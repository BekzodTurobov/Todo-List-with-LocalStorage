import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

import "./Todo.modal.css";

const Todo = ({ task, deleteTodo, editTodo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandle(id) {
    setModalIsOpen(false);
    deleteTodo(id);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function escBtn(e) {
    e.key === "Escape" && setModalIsOpen(false);
  }

  return (
    <>
      <div key={task.id} className="card" onKeyUp={escBtn}>
        <h2 className="title">{task.task}</h2>
        <p className="description">{task.theme}</p>
        <div className="btn-box">
          <button
            className="btn btn--alt"
            onClick={() => {
              editTodo(task.id);
            }}
          >
            Edit
          </button>
          <button className="btn" onClick={openModal}>
            Delete
          </button>
          {modalIsOpen && (
            <Modal
              onConfirm={() => deleteHandle(task.id)}
              onCancel={closeModal}
            />
          )}
          {modalIsOpen && <Backdrop onCancel={closeModal} />}
        </div>
      </div>
    </>
  );
};

export default Todo;
