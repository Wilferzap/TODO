import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Name too short")
    .max(12, "username too long"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const send = () => {
    if (initialCredentials != null) {
      navigate("/taskspage");
    } else {
      alert("Something it's wrong");
    }
  };

  return (
    <div>
      <div>
        <h4>Login Formil</h4>
      </div>

      <Formik
        // Initial values that the will take
        initialValues={initialCredentials}
        // Yup validation schema
        validationSchema={loginSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          // // we save the data in the localstorage

          {
            send();
          }
          localStorage.setItem("credential", values);
        }}
      >
        {/*  we obtain props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          // creamos el formulario

          <Form>
            <div className="card" style={{ width: "18rem" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <label htmlFor="email">Email: </label>
                  <Field
                    style={{ border: "0px" }}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="  Your email"
                  />

                  {/* Email Errors */}
                  {errors.email && touched.email && (
                    <ErrorMessage name="email" component="div"></ErrorMessage>
                  )}
                </li>

                <li className="list-group-item" style={{ display: "flex" }}>
                  <label htmlFor="password">Password: </label>
                  <Field
                    style={{ border: "0px" }}
                    id="password"
                    name="password"
                    placeholder="  Your password"
                    type="password"
                  />
                </li>
                {/* Password Errors */}
                {errors.password && touched.password && (
                  <ErrorMessage
                    name="password"
                    component="alert"
                  ></ErrorMessage>
                )}
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary "
                    style={{ width: "100%" }}
                  >
                    Login
                  </button>
                </div>
              </ul>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
