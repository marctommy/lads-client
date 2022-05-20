import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import MapsInput from "./MapsInput";

export const TemplateActivity = ({ loggedInUser }) => {
  const navigate = useNavigate();

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
        { ...newActivity, user: loggedInUser._id, location: location }
      );
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  const templateList = [
    {
      label: "Cooking and Griling ",
      description:
        "Being able to feed yourself well is a basic part of self-sufficiency, guys. Moreover, when you learn how things go together, and how to create a perfect meal from scratch, you make yourself an asset in any hungry situation.",
      category: "Others",
      value: 1,
    },
    {
      label: "Exercise and play a sport",
      description:
        "To stay fit and healthy, you can do exercise alone, such as swimming or working out at a gym, or you can play a team sport, such as football or basketball.",
      category: "Others",
      value: 2,
    },
    {
      label: "Music Instrument",
      description: "Learn and play together",
      category: "Others",
      value: 3,
    },
    {
      label: "Go to cultural locations and events",
      description:
        "You can go to the museum, to an art gallery or to the zoo to see animals from around the world. You can go to concerts, plays, musicals, dance recitals and opera performances.",
      category: "Others",
      value: 3,
    },
    {
      label: "Play Date with children",
      description:
        "Your child(ren) is the focus here. Bring your children together and exchange ideas and tips with other fathers.",
      category: "Others",

      value: 4,
    },
    {
      label: "Talk and walk",
      description:
        "Take your peer for a walk and talk about life, the weather, but not politics.",
      category: "Outdoor",
      value: 5,
    },
    {
      label: "Power of Creativity",
      description:
        "Photography, exchange of ideas, design and coding, online marketing, Painting, drawing or others.",
      category: "Others",
      value: 6,
    },
    {
      label: "Running",
      description:
        "Go for a run, compete, train for the next big charity race.",
      category: "Sports",
      value: 7,
    },
    {
      label: "Long walks and hikes",
      description: "Fresh air clears the head. Just keep walking.",
      category: "Outdoor",
      value: 8,
    },
    {
      label: "On the big screen",
      description:
        "Watch soccer or sports events, binge a tv show or enjoy a bloke movie together over beer and snacks or cook a meal before",
      category: "Sports",
      value: 9,
    },
    {
      label: "Meditation and Yoga",
      description:
        "Meeting in the park or at home for a session of yoga and practising mindfulness together over a 30 minute meditation",
      category: "Mindfulness",
      value: 10,
    },
    {
      label: "Co-Working",
      description:
        "Have a project in mind that you always wanted to pursue further? Co-Working is the place for finding other like-minded enthusiasts helping to get this project get togethe.",

      value: 11,
    },
  ];

  return (
    <div>
      <center>
        <div className="form">
          <form className="card" onSubmit={handleSubmit}>
            <label>
              Name
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="activity"
                options={templateList}
                onChange={(selectedActivity) => {
                  setNewActivity({
                    ...newActivity,
                    description: selectedActivity.description,
                    name: selectedActivity.label,
                    category: selectedActivity.category,
                  });
                }}
              />
            </label>

            <label>
              Description <br />
              <textarea
                type="text"
                cols="30"
                rows="5"
                onChange={(event) => {
                  setNewActivity({
                    ...newActivity,
                    description: event.target.value,
                  });
                }}
                value={newActivity.description}
              />
            </label>

            <label>
              startDate
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

            <label>
              endDate
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

            <label>
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

            <label>
              Location
              <MapsInput getData={getData} />
            </label>

            <center>
              <span>
                <strong> </strong>
              </span>{" "}
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
    </div>
  );
};
