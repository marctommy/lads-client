import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserUpdate = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [updatedUser, setUpdatedUser] = useState({
    name: loggedInUser.name,
    description: loggedInUser.description,
  });

  const handleSubmit = async (event) => {
    console.log("click");
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3005/api/user/${loggedInUser._id}`,
        {
          ...updatedUser,
        }
      );

      setLoggedInUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-profile">
      <hr />
      <form onSubmit={handleSubmit}>
        <label className="text-muted small">
          Name
          <input
            type="text"
            onChange={(event) => {
              setUpdatedUser({
                ...updatedUser,
                name: event.target.value,
              });
            }}
            value={updatedUser.name}
          />
        </label>
        <br />

        <label className="text-muted small">
          Description <br />
          <textarea
            type="text"
            onChange={(event) => {
              setUpdatedUser({
                ...updatedUser,
                description: event.target.value,
              });
            }}
            value={updatedUser.description}
          />
        </label>
        <br />

        <label className="text-muted small">
          Location
          <input
            type="text"
            onChange={(event) => {
              setUpdatedUser({
                ...updatedUser,
                location: event.target.value,
              });
            }}
            value={updatedUser.location}
          />
        </label>

        <button
          className="btn btn-outline-dark btn-sm btn-floating"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
//
