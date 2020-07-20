import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./ToDoList.scss";

function ToDoList({ tasks, deleteItemHendler, toggllTaskHandler, changeTaskTitleHandler }) {
  const [editItem, setEditItem] = useState(0);

  return (
    <ul className="ToDoList">
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          deleteItemHendler={deleteItemHendler}
          toggllTaskHandler={toggllTaskHandler}
          editItem={editItem}
          setEditItem={setEditItem}
          changeTaskTitleHandler={changeTaskTitleHandler}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
