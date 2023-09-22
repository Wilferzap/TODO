import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/level.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";
import { useNavigate } from "react-router-dom";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Default description 2",
    true,
    LEVELS.URGENT
  );

  // Estado del componenete

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2]);
  const [loading, setLoading] = useState(true);

  function completeTask(task) {
    console.log("Complete this task", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // we update the state of the component and it will update the iteration of the task in
    // order to show the task update
    setTasks(tempTask);
  }

  // funcion para borrar la tarea

  function deleteTask(task) {
    console.log("Delete this task", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  // funcion para anyadir una tare

  function addTask(task) {
    console.log("create this task", task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  // Comtrol del ciclo de vida del componente

  useEffect(() => {
    console.log("Task state has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      console.log("Task component is going to unmount...");
    };
  }, [tasks]);

  const Table = () => {
    return (
      <div style={{ height: "100%", overflowY: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Priority</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: ietrar sobre una lista de tareas */}
            {tasks.map((task, index) => {
              return (
                <TaskComponent
                  key={index}
                  task={task}
                  completed={completeTask}
                  remove={deleteTask}
                ></TaskComponent>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3>there are no taks to show</h3>
        <h4>Please, create one</h4>
      </div>
    );
  }

  const loadingStyle = {
    color: "grey",
    fontWeight: "bold",
    fontSize: "30px",
  };

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="card-12" style={{ width: "25rem" }}>
        <div className="card">
          <div className="card-header p-3">
            <h5>TODO LIST:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "350px" }}
          >
            {loading ? <p style={loadingStyle}>loading task...</p> : tasksTable}
          </div>
        </div>
        <TaskForm add={addTask}></TaskForm>
      </div>
      {/* aplicar un for/map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}

      <button
        onClick={logout}
        className="btn btn-outline-secundary btn-ms-2"
        style={{ width: "100%" }}
      >
        logout
      </button>
    </div>
  );
};

export default TaskListComponent;
