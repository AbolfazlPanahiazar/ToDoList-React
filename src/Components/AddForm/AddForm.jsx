import React from "react";
import "./AddForm.scss";

function AddForm(props) {
  return (
    <form className="AddFrom">
      <button className="AddForm__button">ایجاد</button>
      <input className="AddForm__input" type="text" placeholder="وظیفه جدید ایجاد کنید" />
    </form>
  );
}

export default AddForm;
