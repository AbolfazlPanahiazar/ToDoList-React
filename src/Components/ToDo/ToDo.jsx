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

  const deleteItemHendler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggllTaskHandler = (id) => {
    const newTasks = [...tasks];
    const theIndex = newTasks.findIndex((task) => task.id === id);
    newTasks[theIndex].done = !newTasks[theIndex].done;
    setTasks(newTasks);
  };

  return (
    <div className="ToDo">
      <AddForm addTaskHandler={addTaskHandler} />
      <ToDoList tasks={tasks} deleteItemHendler={deleteItemHendler} toggllTaskHandler={toggllTaskHandler} />
    </div>
  );
}

export default ToDo;
