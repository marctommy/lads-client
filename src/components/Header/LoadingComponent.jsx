import React from "react";
import loading from "./loading.gif";
import "./Header.css";
export const LoadingComponent = () => {
  return (
    <div className="loading-component">
      <center>
        <img className="loading-component" alt="loading" src={loading} />
      </center>
    </div>
  );
};
