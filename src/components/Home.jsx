import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Buttons } from "./Activities/Buttons";
import "./Home.css";
import Story from "./Story";

const Home = ({ loggedInUser }) => {
  return (
    <div>
      <Story user={loggedInUser} />
      {loggedInUser ? <Buttons /> : null}
    </div>
  );
};

export default Home;
