import React from "react";
import { ChatFeed } from "./ChatFeed";
import { ChatForm } from "./ChatForm";
import { chat } from "../../api/service";
import io from "socket.io-client";
import "./Chat.css";

const ChatContainer = ({ loggedInUser, conversation, activity }) => {
  const [feed, setFeed] = React.useState(conversation);
  const socketRef = React.useRef();

  React.useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_API_BASE_URL);
    socketRef.current.on("message", (messageData) => {
      console.log([...feed, messageData]);
      setFeed([...feed, messageData]);
    });
    return () => socketRef.current.disconnect();
  }, [feed]);

  const handleSendMessage = (newMessage) => {
    chat
      .sendMessage(loggedInUser, newMessage, activity._id)
      .then((response) => {
        socketRef.current.emit("message", {
          ...response.data,
          sendBy: loggedInUser.name,
        });
        console.log("message", loggedInUser);
        setFeed([...feed, { ...response.data, sendBy: loggedInUser.name }]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="chat-container">
      <h3>Hi {loggedInUser?.name},</h3>
      <p>here you can talk with the other lads about this activity.</p>

      <ChatFeed messages={feed} loggedInUser={loggedInUser} />
      <ChatForm sendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
