// Ejemplo de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "comportamiento antes de que el componente sea anyadido al DOM (renderice)"
    );
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidmountHook = () => {
  useEffect(() => {
    console.log(
      "comportamiento antes de que el componente sea anyadido al DOM (renderice)"
    );
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
