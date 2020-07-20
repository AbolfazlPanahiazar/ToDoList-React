import React, { useState } from "react";
import "./AddForm.scss";

function AddForm({ addTaskHandler }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHndler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="AddFrom">
      <button className="AddForm__button" onClick={() => addTaskHandler(inputValue)}>
        ایجاد
      </button>
      <input className="AddForm__input" type="text" placeholder="وظیفه جدید ایجاد کنید" value={inputValue} onChange={inputChangeHndler} />
    </div>
  );
}

export default AddForm;
