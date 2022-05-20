import React, { useState } from "react";
import "./Activity.css";
import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <div className="flex">
      <Link to="/activities" className="activity-btn ">
        Search Activity{" "}
      </Link>
      <Link to="/activities/create" className="activity-btn">
        {" "}
        Create Activity{" "}
      </Link>
    </div>
  );
};
