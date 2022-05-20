import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MapsInput from "./MapsInput";

export const EditActivity = ({ activity }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [location, setLocation] = useState("");
  const [updatedActivity, setUpdatedActivity] = useState({
    name: activity.name,
    description: activity.description,
    location: activity.location,
  });

  const getData = (data) => {
    console.log("coming from MapsInput", data);
    setLocation(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const update = await axios.put(
        `https://the-lads.herokuapp.com/api/activities/${id}`,
        { ...updatedActivity, location: location }
      );

      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div className="edit-form" style={{ marginLeft: 150 }}>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="edit-child">
            <label className="text-muted small">
              Name
              <input
                type="text"
                onChange={(event) => {
                  setUpdatedActivity({
                    ...updatedActivity,
                    name: event.target.value,
                  });
                }}
                value={updatedActivity.name}
              />
            </label>
          </div>
          <div className="edit-child">
            <label className="text-muted small">
              Description
              <br />
              <textarea
                type="text"
                onChange={(event) => {
                  setUpdatedActivity({
                    ...updatedActivity,
                    description: event.target.value,
                  });
                }}
                value={updatedActivity.description}
              />
            </label>
          </div>

          <label className="text-muted small">
            Location
            <MapsInput getData={getData} />
          </label>

          <button
            className="btn btn-outline-dark btn-sm btn-floating"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </center>
  );
};

//
