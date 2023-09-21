import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "./../../../src/styles/task.scss";
import { LEVELS } from "../../models/level.enum";

const TaskComponent = ({ task, completed, remove }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  // funcion que retorna un badge, dependiendo del nivel de la tarea
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-o">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-o">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-o">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  // fUNCION que retorna un icono dependiendo si la tarea esta completa o no

  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-off task-action"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  // Estilos del renderizado de las tareas

  const taskCompleted = {
    color: "gray",
    textDecoration: "line-through",
  };

  const taskPendign = {
    fontWeight: "bold",
    color: "tomato",
  };

  return (
    <tr
      className="fw-normal"
      style={task.completed ? taskCompleted : taskPendign}
    >
      <th scope="row">{task.name}</th>
      <td className="align-middle">{task.description}</td>
      {/* Ejecutamos la funcion que retorna los badges */}
      <td className="align-middle">{taskLevelBadge()}</td>
      {/* TODO: sustituir por iconos */}
      <td className="align-middle">{taskCompletedIcon()}</td>
      <td className="align-middle">
        <i
          className="bi-trash task-action"
          style={{ color: "tomato" }}
          onClick={() => remove(task)}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
