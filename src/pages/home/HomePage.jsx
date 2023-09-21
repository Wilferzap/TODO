import React from "react";
import { useNavigate } from "react-router-dom";
import tarea from "../../img/tarea.png";

// import RegisterPage from "../auth/RegisterPage";
// import LoginPage from "../auth/LoginPage";

const HomePage = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/registerpage");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div
      className="card col-sm-12 col-lg-4 col-md-6 "
      style={{ width: "20rem" }}
    >
      <div
        className="card-body"
        data-mdb-perfect-scrollbar="true"
        style={{ position: "relative" }}
      >
        <img className="card-img-top" src={tarea} alt="Card image cap"></img>
        <h1 className="card-title" style={{ color: "tomato" }}>
          Home Page
        </h1>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="container" style={{ padding: "0" }}>
          <div className="row justify-content-md-center ">
            <div className="col ">
              <button
                style={{ width: "100%" }}
                type="button"
                className="btn btn-outline-secondary btn-sm "
                onClick={() => register()}
              >
                Register
              </button>
            </div>
            <div className="col">
              <button
                style={{ width: "100%" }}
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => login()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
