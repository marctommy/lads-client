import React from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, sePassword] = React.useState("");

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => sePassword(event.target.value);

  const handleSubmit = () => {
    login(email, password).then((user) => {
      props.setLoggedInUser(user);
      navigate("/");
    });
  };

  return (
    <center>
      <center>
        <div className="card login">
          <input
            style={{ marginTop: 200 }}
            type="text"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />

          <div>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm btn-floating"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div>
            <Link
              className="btn btn-outline-dark btn-sm btn-floating"
              to="/signup"
            >
              Want to create a new account?
            </Link>
          </div>
        </div>
      </center>
    </center>
  );
};

export default Login;
