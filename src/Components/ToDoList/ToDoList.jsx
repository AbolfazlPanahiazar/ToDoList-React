import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ToDoList.scss";

function ToDoList({ tasks, deleteItemHendler, toggllTaskHandler }) {
  return (
    <ul className="ToDoList">
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} deleteItemHendler={deleteItemHendler} toggllTaskHandler={toggllTaskHandler} />
      ))}
    </ul>
  );
}

export default ToDoList;
