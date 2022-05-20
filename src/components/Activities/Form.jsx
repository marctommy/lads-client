import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapsInput from "./MapsInput";

const Form = ({ loggedInUser }) => {
  const { _id } = loggedInUser;
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState();
  const [location, setLocation] = useState("");
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    withChildren: false,
    location: "",
    category: "",
  });

  const getData = (data) => {
    console.log("coming from MapsInput", data);
    setLocation(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://the-lads.herokuapp.com/api/activities/create",
        { ...newActivity, category: categoryId, user: _id, location: location }
      );
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    { text: "Outdoor", categoryId: "Outdoor" },
    { text: "DIY", categoryId: "DIY" },
    { text: "Mindfulness", categoryId: "Mindfulness" },
    { text: "Sports", categoryId: "Sports" },
    { text: "Games", categoryId: "Games" },
    { text: "Networking", categoryId: "Networking" },
    { text: "Others", categoryId: "Others" },
  ];

  return (
    <center>
      <div className="form">
        <form className="card" onSubmit={handleSubmit}>
          <label className="text-muted small">
            Name
            <input
              type="text"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  name: event.target.value,
                });
              }}
              value={newActivity.name}
            />
          </label>

          <label className="text-muted small">
            Description
            <br />
            <textarea
              type="text"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  description: event.target.value,
                });
              }}
              value={newActivity.description}
            />
          </label>

          <label className="text-muted small">
            start Date
            <input
              type="datetime-local"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  startDate: event.target.value,
                });
              }}
              value={newActivity.startDate}
            />
          </label>

          <label className="text-muted small">
            end Date
            <input
              type="datetime-local"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  endDate: event.target.value,
                });
              }}
              value={newActivity.endDate}
            />
          </label>

          <label className="text-muted small">
            With Children?
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  withChildren: event.target.checked,
                });
              }}
              value={newActivity.withChildren}
            />
          </label>

          <label className="text-muted small">
            Location
            <MapsInput getData={getData} />
          </label>

          <center>
            <span>
              <strong className="text-muted small"> Category: </strong>
            </span>{" "}
            <section style={{ cursor: "pointer" }}>
              {categories.map((category) => (
                <span
                  className={`badge rounded-pill ${
                    categoryId === category.categoryId
                      ? "bg-primary"
                      : "bg-secondary"
                  }`}
                  onClick={() => setCategoryId(category.categoryId)}
                  key={category.categoryId}
                >
                  {category.text}
                </span>
              ))}
            </section>
          </center>

          <button
            type="submit"
            className="btn btn-outline-dark btn-sm btn-floating"
          >
            Create
          </button>
        </form>
      </div>
    </center>
  );
};

export default Form;
