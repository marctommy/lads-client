import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddToCalendar from "./AddToCalendar";
import moment from "moment";
import "./Activity.css";
import AttendeeToggle from "./AttendeeToggle";
export const ItemActivity = ({ activity, loggedInUser }) => {
  const {
    _id,
    name,
    description,
    endDate,
    attendees,
    category,
    location,
    startDate,
    withChildren,
    user,
  } = activity;

  // const [isAttended, setIsAttended] = useState(
  //   loggedInUser.eventsAttended?.includes(_id)
  // );

  // const handleAttend = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       `https://the-lads.herokuapp.com/api/user/${loggedInUser._id}`,
  //       {
  //         newEventId: _id,
  //       }
  //     );
  //     setIsAttended(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="activity-list">
      <center>
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col col-xl-10">
            <div className="card mb-5">
              <div className="card-body p-4">
                <h3 className="mb-3 activity-text"> {name}</h3>
                <span className="badge rounded-pill bg-primary">
                  {category}
                </span>{" "}
                <br />
                <span>
                  {" "}
                  <span className="text-muted small">
                    {" "}
                    <strong>
                      {withChildren ? "with Kids" : "without Kids"}{" "}
                    </strong>
                  </span>
                  <br />
                  <span className="text-muted small">
                    <span>
                      Starting:{" "}
                      {moment(startDate).format("dddd DD.MM.YY HH:MM")}
                    </span>
                    <br />
                    Ending: {moment(endDate).format("dddd DD.MM.YY HH:MM")}
                    <br />
                    <span className="text-muted small">
                      {" "}
                      Posted by {user.name}
                    </span>
                    <hr />
                  </span>
                </span>
                <div className="text-muted small">
                  <img
                    className="profile-photo-details"
                    alt="Profile"
                    src={require(`../UserProfile/avatars/${user.avatarId}.gif`)}
                  />
                  <br />
                  <span className="text-muted small">Location: {location}</span>
                  <br />
                  <br />
                  <div className="mb-0 text-udivercase">
                    <span className="text-muted small">
                      Check Details for more info.
                    </span>

                    <br />
                    <div className="button-container">
                      {/* <button
                        disabled={isAttended}
                        onClick={handleAttend}
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        {isAttended ? "attended" : "attend"}
                      </button> */}
                      <AttendeeToggle
                        activity={activity}
                        loggedInUser={loggedInUser}
                      />
                      <Link
                        to={`/activities/${_id}`}
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        Details
                      </Link>
                      <AddToCalendar
                        className="calendar-button"
                        activityToBeAdded={activity}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
