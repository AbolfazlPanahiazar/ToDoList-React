import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ToDoList.scss";

function ToDoList({ tasks }) {
  return (
    <ul className="ToDoList">
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default ToDoList;
