import React, { useState } from "react";
import "./ListItem.scss";

function ListItem({ task, deleteItemHendler, toggllTaskHandler, editItem, setEditItem, changeTaskTitleHandler }) {
  const [editInputValue, setEditInputValue] = useState(task.title);

  const editInputHandler = (event) => {
    setEditInputValue(event.target.value);
  };

  return (
    <li className="ListItem">
      <div>
        <input className="ListItem__checkbox" type="checkbox" onChange={() => toggllTaskHandler(task.id)} checked={task.done} />
        {task.id === editItem ? (
          <input className="ListItem__input" value={editInputValue} onChange={editInputHandler} />
        ) : (
          <span className={task.done ? "ListItem__title done" : "ListItem__title"}>{task.title}</span>
        )}
      </div>
      {task.id === editItem ? (
        <div>
          <button
            className="ListItem__save"
            onClick={() => {
              changeTaskTitleHandler(task.id, editInputValue);
              setEditItem(0);
            }}
          >
            ذخیره
          </button>
          <button className="ListItem__cancell" onClick={() => setEditItem(0)}>
            انصراف
          </button>
        </div>
      ) : (
        <div>
          <button className="ListItem__edit" onClick={() => setEditItem(task.id)}>
            ویرایش
          </button>
          <button className="ListItem__delete" onClick={() => deleteItemHendler(task.id)}>
            حذف
          </button>
        </div>
      )}
    </li>
  );
}

export default ListItem;
