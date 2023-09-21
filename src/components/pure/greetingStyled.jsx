// Definiendo estilos en constantes

import React, { useState } from "react";
import PropTypes from "prop-types";

const loggedStyle = {
  color: "white",
};

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  // genereamos un estado del componente
  // y asi controlamos si el usuario esta o no logueado

  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hello, {props.name}</p> : <p>Plese loging</p>}

      <button
        onClick={() => {
          console.log("Boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
