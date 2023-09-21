import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
import ProfilePage from "./pages/home/ProfilePage";
import TaskListComponent from "./components/container/task_list";
import TaskPage from "./pages/tasks/TaskPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";

const AppRouterFinal = () => {
  const loggedIn = false;

  // TODO: crear funcion para saber si estas login o logout

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" Component={LoginPage}></Route>
          <Route exact path="/home" Component={HomePage}></Route>
          <Route exact path="/registerpage" Component={RegisterPage}></Route>
          <Route exact path="/taskspage" Component={TaskPage}></Route>

          {/* Redirection to protect our routes */}
          <Route
            exact
            path="/"
            element={
              loggedIn ? (
                <TaskPage></TaskPage>
              ) : (
                <Navigate replace to={"/home"} />
              )
            }
          ></Route>

          {/* Login Rout */}

          <Route
            exact
            path="/dashboard"
            element={
              loggedIn ? (
                <DashBoard></DashBoard>
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          ></Route>
          <Route path="/profile" Component={ProfilePage}></Route>
          <Route path="/tasks" Component={TaskListComponent}></Route>
          <Route path="*" Component={NotFoundPage}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouterFinal;
