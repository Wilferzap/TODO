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

const AppRouterFinal = () => {
  const loggedIn = true;

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" Component={LoginPage}></Route>

          {/* Redirection to protect our routes */}
          <Route
            exact
            path="/"
            element={
              loggedIn ? (
                <DashBoard></DashBoard>
              ) : (
                <Navigate replace to={"/login"} />
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
          <Route path="*" Component={NotFoundPage}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouterFinal;
