import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ToDoList.scss";

function ToDoList(props) {
  return (
    <ul className="ToDoList">
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
}

export default ToDoList;
