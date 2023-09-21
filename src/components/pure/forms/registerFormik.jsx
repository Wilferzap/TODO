import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enu";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Name too short")
      .max(12, "username too long")
      .required("Username is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role")
      .required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password too short"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: () =>
          Yup.string().oneOf([Yup.ref("password")], "Password must match"),
      })
      .required("You must confirm the password"),
  });

  const navigate = useNavigate();

  const send = () => {
    if (initialValues != null) {
      navigate("/taskspage");
    } else {
      alert("Something it's wrong");
    }
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          {
            send();
          }
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <ul class="list-group">
              <li class="list-group-item">
                <label htmlFor="username">Username: </label>
                <Field
                  style={{ border: "0px" }}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="  Your username"
                />
                {/* username Errors */}
                {errors.username && touched.username && (
                  <ErrorMessage name="username" component="div"></ErrorMessage>
                )}
              </li>
              <li class="list-group-item">
                <label htmlFor="email">Email:</label>
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
              <li class="list-group-item">
                <label htmlFor="password">Password:</label>
                <Field
                  style={{ border: "0px" }}
                  id="epassword"
                  name="password"
                  placeholder="  Your password"
                />

                {/* Password Errors */}
                {errors.password && touched.password && (
                  <ErrorMessage name="password" component="div"></ErrorMessage>
                )}
              </li>
              <li class="list-group-item">
                <label htmlFor="comfirm">confirm:</label>
                <Field
                  style={{ border: "0px" }}
                  id="confirm"
                  name="confirm"
                  placeholder="  Comfirm your password"
                />

                {/* confirm Errors */}
                {errors.confirm && touched.confirm && (
                  <ErrorMessage name="confirm" component="div"></ErrorMessage>
                )}
              </li>
              <li class="list-group-item">
                <button
                  style={{ width: "100%" }}
                  className="btn btn-outline-secondary btn-sm "
                  type="submit"
                >
                  Register Account
                </button>
              </li>
            </ul>

            {isSubmitting ? <p>Sending your credential...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
