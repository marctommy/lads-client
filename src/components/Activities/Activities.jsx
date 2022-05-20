import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Activity.css";
import { ItemActivity } from "./ItemActivity";
import { LoadingComponent } from "../Header/LoadingComponent";
import Weather from "../Features/Weather";

const Activities = ({ loggedInUser }) => {
  const [listOfActivities, setListOfActivities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3005/api/activities/");
      setListOfActivities(res.data);
    };
    fetchData();
  }, []);

  return !listOfActivities.length > 0 ? (
    <LoadingComponent />
  ) : (
    <div>
      <center>
        <Weather />

        <Link to="/activities/create" className="activity-btn">
          Create Own
        </Link>
        <Link to="/activities/create/template" className="activity-btn">
          Choose Template
        </Link>
        {listOfActivities?.map((activity, index) => (
          <ItemActivity
            activity={activity}
            loggedInUser={loggedInUser}
            key={activity.name}
          />
        ))}
      </center>
    </div>
  );
};
export default Activities;
