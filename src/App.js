import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";
import { logout } from "./services/auth";
import { useNavigate } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Activities from "./components/Activities/Activities";
import Form from "./components/Activities/Form";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Details } from "./components/Activities/Details";
import ChatContainer from "./components/Chat/ChatContainer";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateActivity } from "./components/Activities/TemplateActivity";
import UserUpdate from "./components/UserProfile/UserUpdate";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/DarkTheme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/DarkTheme/Themes";
import { useDarkMode } from "./components/DarkTheme/UseDarkMode";
function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [loggedInUser, setLoggedInUser] = React.useState({});
  React.useEffect(() => {
    axios
      .get("/api/auth/loggedin")
      .then((response) => setLoggedInUser(response.data))
      .catch((err) => console.log(err));
    console.log("loggedin", loggedInUser);
  }, []);
  const logoutHandler = () => {
    logout().then((done) => {
      setLoggedInUser(null);
      navigate("/");
    });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Navbar
          themeToggler={themeToggler}
          currentUser={loggedInUser}
          isLoggedIn={!!loggedInUser}
          logoutHandler={logoutHandler}
        ></Navbar>

        {/* {!!loggedInUser && <ChatContainer loggedInUser={loggedInUser} />} */}
        <Header loggedInUser={loggedInUser} />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home loggedInUser={loggedInUser ? loggedInUser : ""} />}
            />

            <Route
              path="/signup"
              element={<SignUp setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              path="/login"
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />

            <Route
              path="/user"
              element={<UserProfile loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}
            />

            <Route
              path="/user/:id/edit"
              element={<UserUpdate loggedInUser={loggedInUser} />}
            />

            <Route
              path="/activities"
              element={<Activities loggedInUser={loggedInUser} />}
            />

            <Route
              path="/activities/:id"
              element={<Details loggedInUser={loggedInUser} />}
            />

            <Route
              path="/activities/create"
              element={<Form loggedInUser={loggedInUser} />}
            />

            <Route
              path="/activities/create/template"
              element={<TemplateActivity loggedInUser={loggedInUser} />}
            />

            <Route
              path="/activities/:id"
              element={<Details loggedInUser={loggedInUser} />}
            />
            <Route path="/activities/:id/edit" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
