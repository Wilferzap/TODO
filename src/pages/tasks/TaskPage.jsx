import React from "react";
import TaskListComponent from "../../components/container/task_list";

const TaskPage = () => {
  return (
    <div
      style={{
        padding: "1rem",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TaskListComponent></TaskListComponent>
    </div>
  );
};

export default TaskPage;
