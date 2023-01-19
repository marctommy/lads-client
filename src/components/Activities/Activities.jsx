import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Activity.css";
import { ItemActivity } from "./ItemActivity";
import { LoadingComponent } from "../Header/LoadingComponent";
import Weather from "../Features/Weather";
import SearchBar from "./SearchBar";

const Activities = ({ loggedInUser }) => {
  const [listOfActivities, setListOfActivities] = useState([]);
  const [searchBarInput, setSearchBarInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://the-lads.herokuapp.com/api/activities/"
      );
      setListOfActivities(res.data);
    };
    fetchData();
  }, []);

  //element.target.value.toLowerCase()

  return !listOfActivities.length > 0 ? (
    <LoadingComponent />
  ) : (
    <div>
      <center>
        <Weather />
        <br />
        <SearchBar
          listOfActivities={listOfActivities}
          loggedInUser={loggedInUser}
          setSearchBarInput={setSearchBarInput}
        />
        <Link to="/activities/create" className="activity-btn">
          Create Own
        </Link>
        <Link to="/activities/create/template" className="activity-btn">
          Choose Template
        </Link>

        {listOfActivities
          ?.filter((activity) =>
            activity.category.toLowerCase().includes(searchBarInput)
          )
          .map((activity, index) => (
            <ItemActivity
              activity={activity}
              loggedInUser={loggedInUser}
              key={`${activity.name}+${index}`}
            />
          ))}
      </center>
    </div>
  );
};
export default Activities;
