import React, { useState } from "react";
import PropTypes from "prop-types";

const GretingF = (props) => {
  const [age, setAge] = useState(29);
  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name}! desde componente funcional</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir anyos</button>
      </div>
    </div>
  );
};

GretingF.propTypes = {
  name: PropTypes.string,
};

export default GretingF;
