import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ background: "cyan", padding: "30px" }}>
      <p onMouseOver={() => console.log("On mouse over")}>Hello, {name}</p>
      <button onClick={() => console.log("Pressed button 1")}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={() => pressButton("Hello")}>Button 3</button>
      <input
        placeholder="Insert a text"
        onFocus={() => console.log("Input focused")}
        onChange={(e) => console.log("Input changed:", e.target.value)}
        ref={messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input placeholder="New Name" ref={nameRef}></input>
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
