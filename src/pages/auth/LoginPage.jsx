import React, { useState } from "react";
import LoginFormik from "../../components/pure/forms/loginFormik";

const LoginPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <div className="card">
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative" }}
        >
          <LoginFormik></LoginFormik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
