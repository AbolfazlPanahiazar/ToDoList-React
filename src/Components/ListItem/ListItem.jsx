import React, { useState } from "react";
import "./ListItem.scss";

function ListItem({ task, deleteItemHendler, toggllTaskHandler }) {
  const [checkInput, setCheckInput] = useState(task.done);

  return (
    <li className="ListItem">
      <div>
        <input className="ListItem__checkbox" type="checkbox" onChange={() => toggllTaskHandler(task.id)} checked={task.done} />
        <span className={task.done ? "ListItem__title done" : "ListItem__title"}>{task.title}</span>
      </div>
      <div>
        <button className="ListItem__edit">ویرایش</button>
        <button className="ListItem__delete" onClick={() => deleteItemHendler(task.id)}>
          حذف
        </button>
      </div>
    </li>
  );
}

export default ListItem;
