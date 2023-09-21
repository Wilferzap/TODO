import React from "react";
import {
  login,
  getAllPages,
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} from "../../utils/config/axiosCRUDServise";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AxiosCRUDExample = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          // con esta linea guardamos el valor del token
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Login Done"));
  };

  //   CRUD Examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  const obtainAllPagesUsers = (page) => {
    getAllPages(page)
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  const obtainUserByID = (id) => {
    getUserByID(id)
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.status === 201) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("User no created");
        }
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  const updateUserByID = (id, name, job) => {
    updateUser(id, name, job)
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("User no update");
        }
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  const deleteUserByID = (id) => {
    deleteUser(id)
      .then((response) => {
        if (response.status === 204) {
          alert("User delete succesfully");
        } else {
          throw new Error("User no delete");
        }
      })
      .catch((error) => {
        alert(`Something went wromg: ${error}`);
      });
  };

  return (
    <div>
      <h4>Login Formil</h4>
      <Formik
        // Initial values that the will take
        initialValues={initialCredentials}
        // Yup validation schema
        validationSchema={loginSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          authUser(values);
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
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
            />

            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="epassword"
              name="password"
              placeholder="Your password"
              type="password"
            />

            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <duv>
        {/* Example button to text API responses */}
        <button onClick={obtainAllUsers}>Get All Users Whit AXIOS</button>
        <button onClick={() => obtainAllPagesUsers(1)}>
          Get All User (Page 1) Whit AXIOS
        </button>
        <button onClick={() => obtainUserByID(1)}>Get Users 1</button>
        <button onClick={() => createNewUser("morpheus", "leader")}>
          Create USer
        </button>
        <button onClick={() => updateUserByID(1, "morpheus", "Developer")}>
          Update USer
        </button>
        <button onClick={() => deleteUserByID(1)}>Delete USer</button>
      </duv>
    </div>
  );
};

export default AxiosCRUDExample;
