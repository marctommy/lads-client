import React, { useState, useEffect } from "react";
import axios from "axios";
const AttendeeToggle = ({ loggedInUser, activity }) => {
  const { _id, name, attendees } = activity;

  const [isAttended, setIsAttended] = useState(false);
  // const [isAttended, setIsAttended] = useState(
  //   loggedInUser.eventsAttended?.includes(_id) && false
  // );
  // useEffect(() => {
  //   if (loggedInUser.eventsAttended?.includes(_id)) {
  //     setIsAttended(true);
  //   } else {
  //     setIsAttended(false);
  //   }
  // }, []);

  const handleToggle = async (event) => {
    if (isAttended) {
      try {
        const response = await axios.put(
          `https://the-lads.herokuapp.com/api/user/${loggedInUser._id}`,
          {
            newEventId: _id,
          }
        );
        setIsAttended(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      const response = await axios.delete(
        `https://the-lads.herokuapp.com/api/user/${loggedInUser._id}`,
        {
          newEventId: _id,
        }
      );
      setIsAttended(true);
    }
    console.log("isAttended", isAttended);
  };

  return (
    <div className="button-container">
      <button
        onClick={handleToggle}
        type="button"
        className="btn btn-outline-dark btn-sm btn-floating"
      >
        {isAttended ? "attended" : "attend"}
      </button>
    </div>
  );
};

export default AttendeeToggle;
