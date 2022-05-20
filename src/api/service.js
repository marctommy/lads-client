import axios from "axios";

const getPreviousMessages = (activityId) =>
  axios.get(`https://the-lads.herokuapp.com/chat/${activityId}`);

const sendMessage = (user, newMessage, activityId) =>
  axios.post(`https://the-lads.herokuapp.com/chat/${activityId}/new-message/`, {
    sendBy: user.name,
    newMessage,
  });

const checkLoggedIn = () =>
  axios.get("https://the-lads.herokuapp.com/api/auth/loggedin");

const signup = (name, password) =>
  axios.post(`https://the-lads.herokuapp.com/api/auth/signup`, {
    name,
    password,
  });

const login = (name, password) =>
  axios.post(`https://the-lads.herokuapp.com/api/auth/login`, {
    name,
    password,
  });

export const chat = {
  getPreviousMessages,
  sendMessage,
};

export const auth = {
  checkLoggedIn,
  signup,
  login,
};
