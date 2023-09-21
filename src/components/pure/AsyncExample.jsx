import React from "react";

const AsyncExample = () => {
  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "martin")
      .then((response) => {
        let value = response;
        alert(`Saved Name: ${value}`);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("SUCCESS: name seved and retreived"));
  }

  //    Generar una nueva promesa

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });
    let message = await promise;

    await alert(`Message received: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Ooops!"));
  };

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everything is ok: ${response}`))
      .catch((error) => alert(`Something is wrong`))
      .finally(() => alert("Finally executed"));
  };

  return (
    <div>
      <h1> Async Examples</h1>
      <button onClick={showStorage}>Save name and show</button>
      <button onClick={obtainMessage}>Receive message in 2 seconds</button>
      <button onClick={consumeError}>Obtain Error</button>
    </div>
  );
};

export default AsyncExample;
