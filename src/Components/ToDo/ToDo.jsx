import React, { useState, useEffect } from "react";
import AddForm from "../AddForm/AddForm";
import ToDoList from "../ToDoList/ToDoList";
import "./ToDo.scss";

function ToDo() {
  const localTasks = JSON.parse(localStorage.getItem("hyfjgnxcmvnbskdfjhgeor"));
  if (!localTasks) localStorage.setItem("hyfjgnxcmvnbskdfjhgeor", JSON.stringify([]));

  const [tasks, setTasks] = useState(localTasks);

  useEffect(() => {
    localStorage.setItem("hyfjgnxcmvnbskdfjhgeor", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      done: false,
    };
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  return (
    <div className="ToDo">
      <AddForm addTaskHandler={addTaskHandler} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default ToDo;
