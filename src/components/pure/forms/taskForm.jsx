import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/level.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  //  Estilos

  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };

  const urgentStyle = {
    color: "yellow",
    fontWeight: "bold",
  };

  const blockingStyle = {
    color: "tomato",
    fontWeight: "bold",
  };

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Add a new task</h5>

      <form
        onSubmit={addTask}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        <div className="form-outline flex-fill">
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            required
            className="form-control form-control-lg"
            autoFocus
            placeholder="Task name:"
          ></input>
          <input
            ref={descriptionRef}
            id="inputDescription"
            type="text"
            required
            className="form-control form-control-lg"
            placeholder="Description:"
          ></input>

          <select
            className="form-control form-control-lg"
            ref={levelRef}
            defaultValue={LEVELS.NORMAL}
            id="selectLevel"
          >
            <option style={normalStyle} value={LEVELS.NORMAL}>
              Normal
            </option>
            <option style={urgentStyle} value={LEVELS.URGENT}>
              Urgent
            </option>
            <option style={blockingStyle} value={LEVELS.BLOCKING}>
              Blocking
            </option>
          </select>

          <button
            type="submit"
            className="btn btn-outline-success btn-ms-2"
            style={{ width: "100%" }}
          >
            {length > 0 ? "Add task" : "Create your task"}
          </button>
        </div>
      </form>
    </div>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
