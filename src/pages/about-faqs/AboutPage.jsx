import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const history = useNavigate();
  console.log("we are in rute: ", location.pathname);

  const navegate = () => {
    history("/");
  };

  // const goBack = () => {
  //   history.goBack();
  // };

  return (
    <div>
      <h1>Abaut | FAQS pages</h1>
      <div>
        <button onClick={() => navegate("/")}>Go to home</button>
        <button onClick={() => history(-1)}>Go back</button>
      </div>
    </div>
  );
};

export default AboutPage;
