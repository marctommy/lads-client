import axios from "axios";

const getPreviousMessages = (activityId) => axios.get(`/chat/${activityId}`);

const sendMessage = (user, newMessage, activityId) =>
  axios.post(`/chat/${activityId}/new-message/`, {
    sendBy: user.name,
    newMessage,
  });

const checkLoggedIn = () => axios.get("/auth/loggedin");

const signup = (name, password) =>
  axios.post(`/auth/signup`, { name, password });

const login = (name, password) => axios.post(`/auth/login`, { name, password });

export const chat = {
  getPreviousMessages,
  sendMessage,
};

export const auth = {
  checkLoggedIn,
  signup,
  login,
};
