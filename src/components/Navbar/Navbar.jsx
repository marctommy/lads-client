import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const { isLoggedIn, themeToggler } = props;

  return (
    <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <button className="btn btn-outline-dark btn-sm btn-floating">
          Home
        </button>
      </Link>
      {isLoggedIn ? (
        <Link to="/user">
          <button className="btn btn-outline-dark btn-sm btn-floating">
            Profile
          </button>
        </Link>
      ) : (
        ""
      )}
      {isLoggedIn ? (
        <Link to="/activities">
          <button className="btn btn-outline-dark btn-sm btn-floating">
            Activities
          </button>
        </Link>
      ) : (
        ""
      )}

      {isLoggedIn ? null : (
        <Link to="/login">
          <button className="btn btn-outline-dark btn-sm btn-floating">
            Login
          </button>
        </Link>
      )}

      {isLoggedIn ? (
        <button
          className="btn btn-outline-dark btn-sm btn-floating"
          type="button"
          onClick={props.logoutHandler}
        >
          Logout
        </button>
      ) : (
        <Link to="/signup">
          <button className="btn btn-outline-dark btn-sm btn-floating">
            Sign Up
          </button>{" "}
        </Link>
      )}
      <button
        className="btn btn-outline-dark btn-sm btn-floating"
        onClick={themeToggler}
      >
        Switch Theme
      </button>
    </nav>
  );
};

export default Navbar;
