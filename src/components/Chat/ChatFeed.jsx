import React from "react";
import { ChatBubble } from "./ChatBubble";
import "./Chat.css";
export const ChatFeed = ({ messages, loggedInUser }) => {
  const bubbles =
    messages &&
    [...messages].reverse().map((messageObject) => {
      console.log(
        "🚀 ~ file: ChatFeed.jsx ~ line 8 ~ [...messages].reverse ~ messageObject",
        messageObject
      );

      const { sendBy, message, _id, createdAt } = messageObject;
      const isOwn = loggedInUser?.name === sendBy;
      return (
        <ChatBubble
          date={createdAt}
          key={_id}
          loggedInUser={loggedInUser}
          username={sendBy}
          message={message}
          isOwn={isOwn}
        />
      );
    });
  return <div id="messagesFeed">{bubbles}</div>;
};
