import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";

import ChatContainer from "../Chat/ChatContainer";

export const Details = ({ loggedInUser }) => {
  const [activity, setActivity] = useState();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showChatbubble, setShowChatbubble] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const { id: activityId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://the-lads.herokuapp.com/api/activities/${activityId}`
      );
      console.log("data:", data);
      setActivity(data);
    };
    fetchData();
  }, [activityId]);

  if (!activity) return <LoadingComponent />;

  const hobbiestList = activity.user.hobbies.map((hobby) => {
    return <span className="badge rounded-pill bg-success"> {hobby}</span>;
  });

  const handleWelcome = () => {
    setShowChatbubble(!showChatbubble);
  };

  return (
    <center>
      <div
        className=" activity-text card activity-list back-img"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <center>
          <h1>{activity.name} </h1>

          <span className="badge rounded-pill bg-primary">
            {activity.category}
          </span>
        </center>
        {showChatbubble ? (
          <div
            style={{ position: "absolute", marginTop: 100, paddingLeft: 440 }}
          >
            <h4> Hi! My Name is {activity.user.name}.</h4>
            <span> I am currently living in {activity.user.location}.</span>
            <hr />
            <p>
              <span>{hobbiestList} </span>
              <br />{" "}
            </p>
            <p style={{ width: 250 }}>
              <strong>About me: </strong>
              {activity.user.description ||
                "I will think of something later."}{" "}
            </p>
          </div>
        ) : null}

        <img
          className="profile-photo activity-profile"
          style={{ marginTop: 30 }}
          alt="profile"
          src={require(`../UserProfile/avatars/${activity.user.avatarId}.gif`)}
        />

        <center>
          {" "}
          <button
            style={{ marginTop: 20 }}
            className="btn btn-outline-dark btn-sm btn-floating"
            onClick={handleWelcome}
          >
            Some facts about me
          </button>
        </center>
        <hr />
        {activity.withChildren ? (
          <img
            style={{
              width: "150px",
              marginLeft: -300,
              marginTop: 260,
              position: "absolute",
            }}
            alt="profile"
            src={require(`../assets/true-children.gif`)}
          />
        ) : null}
        <p className="text-left">
          <strong>Description: </strong>
          {activity.description || "Looking for description."}
        </p>
        <div className="mb-0 text-udivercase">
          <p className="text-muted small">{activity.location || "Berlin"}</p>{" "}
        </div>
        <div>
          {loggedInUser.eventsAttended?.includes(activityId) ? (
            <button
              onClick={() => setShowChat(!showChat)}
              className="btn btn-outline-dark btn-sm btn-floating"
            >
              Chat
            </button>
          ) : null}
          {showChat ? (
            <ChatContainer
              activity={activity}
              loggedInUser={loggedInUser}
              conversation={activity.conversation}
            />
          ) : null}

          {loggedInUser._id === activity.user._id ? (
            <div>
              {" "}
              <center>
                <DeleteActivity activity={activity} />

                <button
                  onClick={() => setShowEditForm(!showEditForm)}
                  className="btn btn-outline-dark btn-sm btn-floating"
                >
                  Edit
                </button>

                {showEditForm ? <EditActivity activity={activity} /> : null}
              </center>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </center>
  );
};
