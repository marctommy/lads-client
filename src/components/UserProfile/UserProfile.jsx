import React, { useState } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserUpdate from "./UserUpdate";

export default function UserProfile({ loggedInUser, setLoggedInUser }) {
  const [showChatbubble, setShowChatbubble] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const {
    // _id,
    name,
    hobbies = [],
    avatarId = "glassesblonde",
    eventsAttended,
    location,
    description,
  } = loggedInUser;
  console.log("loggedInUser", loggedInUser);
  const handleWelcome = () => {
    setShowChatbubble(!showChatbubble);
  };

  return (
    <center>
      <div className="card user-profile">
        <center>
          <h2>
            <span className="small profile-text">
              <strong> {name || "Name"}</strong>
            </span>
            <br />
            <small>
              <span className="profile-text">{location}</span>
            </small>
          </h2>
          {showChatbubble ? (
            <img
              style={{ position: "absolute" }}
              className="chat-bubble"
              src={require("./chatbubble.png")}
              alt="tag"
            />
          ) : null}
          <img
            onClick={handleWelcome}
            className="profile-photo"
            alt="profile"
            src={require(`./avatars/${avatarId}.gif`)}
          />
        </center>
        <center>
          <span className="text-muted small">Here For:</span>
          <br />{" "}
          <section>
            {hobbies.map((hobby) => (
              <span className="badge rounded-pill bg-success" key={hobby.id}>
                {hobby}
              </span>
            ))}
          </section>
        </center>
        <hr /> <strong className="profile-text">Bio: </strong>
        <p className="profile-text fst-italic">"{description}"</p>
        {/* {eventsAttended?.map((oneEvent) => {
          return (
            <p className="profile-text" key={loggedInUser.eventsAttended.id}>
              {" "}
              You recently attended: {oneEvent.name || "Event"}
            </p>
          );
        })} */}
        <button
          onClick={() => setShowEditForm(!showEditForm)}
          className="btn btn-outline-dark btn-sm btn-floating"
        >
          Edit
        </button>
        {showEditForm ? (
          <UserUpdate
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        ) : null}
      </div>
    </center>
  );
}
