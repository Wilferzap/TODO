// Componente que va a contener un formulario para auntentificacion de usuario

import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const initialsCredential = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialsCredential);

  return <div></div>;
};

export default LoginForm;
