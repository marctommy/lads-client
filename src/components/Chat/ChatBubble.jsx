import React from "react";
import "./Chat.css";
import moment from "moment";
export const ChatBubble = ({
  username,
  message,
  isOwn,
  loggedInUser,
  date,
}) => {
  const className = isOwn ? "chat-bubble own" : "chat-bubble";

  return (
    <div>
      <div className={className} style={{ padding: 20 }}>
        <p>
          {!isOwn && (
            <span style={{ marginLeft: 10 }}>
              {username}: {moment(date).format("DD.MMM HH:MM")}
            </span>
          )}

          {message}
        </p>
      </div>
    </div>
  );
};
