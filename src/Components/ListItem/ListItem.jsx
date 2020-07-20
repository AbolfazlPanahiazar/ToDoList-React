import React from "react";
import "./ListItem.scss";

function ListItem({ task }) {
  return (
    <li className="ListItem">
      <input className="ListItem__checkbox" type="checkbox" />
      <span className="ListItem__title">{task.title}</span>
      <button className="ListItem__edit">ویرایش</button>
      <button className="ListItem__delete">حذف</button>
    </li>
  );
}

export default ListItem;
