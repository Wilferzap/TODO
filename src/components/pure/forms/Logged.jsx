import React, { useState } from "react";

export function Logged() {
  const [logged, setLogged] = useState(false);
  const changeState = () => {
    setLogged = !logged;
  };
}
