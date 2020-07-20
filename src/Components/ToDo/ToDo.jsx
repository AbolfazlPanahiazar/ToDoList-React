import React from "react";
import AddForm from "../AddForm/AddForm";
import ToDoList from "../ToDoList/ToDoList";
import "./ToDo.scss";

function ToDo() {
  return (
    <div className="ToDo">
      <AddForm />
      <ToDoList />
    </div>
  );
}

export default ToDo;
