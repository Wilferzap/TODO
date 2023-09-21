import axios from "axios";
// Crearemos un metodo de Login
// Login method to reqire endpoint
// @param {string} email
// @param {string} password
export const login = (email, password) => {
  const body = {
    email: email,
    password: password,
  };

  // Return the response with a promise
  return axios.post("https://reqres.in/api/login", body);
};

// Obtain ALl Users
export const getAllUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

// Obtain All Pages users
export const getAllPages = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

// Obtain User By ID
export const getUserByID = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

// Create user
export const createUser = (name, job) => {
  const body = {
    name: name,
    job: job,
  };

  // Return the response with a promise
  return axios.post("https://reqres.in/api/users", body);
};

// Update User
export const updateUser = (id, name, job) => {
  const body = {
    id: id,
    name: name,
    job: job,
  };

  // Return the response with a promise
  return axios.put(`https://reqres.in/api/users/${id}`, body);
};

//   Delete User
export const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
