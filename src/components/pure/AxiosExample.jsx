import React, { useState } from "react";
import { getRandomUser } from "../../utils/axios-servise";
import { useEffect } from "react";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        // console.log(response);

        if (response.status === 200) {
          setUser(response.data.results[0]);
          console.log(response);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  // useEffect(() => {
  //   obtainUser();
  // }, []);

  return (
    <div>
      <h1>Axios Examples</h1>
      {user != null ? (
        <div>
          <img alt="avater" src="user.picture.large"></img>
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
          <p>Genrate a new User</p>
          <button onClick={obtainUser}>Random User</button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
