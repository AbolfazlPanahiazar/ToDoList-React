import React, { useState, useEffect } from "react";
import './ToDo.css';

function ToDo(props) {
  const [list, setList] = useState([]);

  const [input, setInput] = useState("");

  const [doneList, setDoneList] = useState([]);

  const handleCahnge = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    input.trim().length > 0 &&
      setList([
        ...list,
        {
          id: Date.now(),
          value: input,
        },
      ]);
    setInput("");
  };

  const handleDelete = (id) => {
    let tempList = [...list];
    tempList.splice(
      tempList.findIndex((item) => item.id == id),
      1
    );
    setList(tempList);
  };

  const handleCheck = (id) => {
    doneList.includes(id) ? setDoneList(doneList.filter((id) => id != id)) : setDoneList([...doneList, id]);
  };

  useEffect(() => {
    console.log(doneList);
  }, [doneList]);

  return (
    <div className="ToDo">
      <div style={{ display: "flex", justifyContent: "space-evanly" }}>
        <input value={input} onChange={handleCahnge} type={"text"} />

        <button onClick={handleAdd} style={{ margin: "0 0.5rem" }}>
          Add
        </button>
      </div>

      <ol>
        {list.map((item) => (
          <li key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              checked={doneList.includes(item.id)}
              onChange={() => handleCheck(item.id)}
              style={{ margin: "0 0.5rem 0 0 ", alignSelf: "center" }}
              type="checkbox"
            />

            <span style={{ margin: "0 0.5rem" }}>{item.value}</span>

            <span style={{ margin: "0 0.5rem", alignSelf: "center" }}>
              <button onClick={handleDelete}>Delete</button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
