import React from "react";
import "./ClearButton.scss";

function DeleteButton({ cleanAllTasks }) {
  return (
    <button className="ClearButton" onClick={cleanAllTasks}>
      پاک کردن تمام وظایف
    </button>
  );
}

export default DeleteButton;
