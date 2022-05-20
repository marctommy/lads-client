import axios from "axios";

const signup = (
  name,
  email,
  password,
  hobbies,
  avatarId,
  location,
  description
) => {
  return axios
    .post("https://the-lads.herokuapp.com/api/auth/signup", {
      name,
      email,
      password,
      hobbies,
      avatarId,
      location,
      description,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("https://the-lads.herokuapp.com/api/auth/login", { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const logout = () => {
  return axios
    .delete("https://the-lads.herokuapp.com/api/auth/logout")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export { signup, login, logout };
