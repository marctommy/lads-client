import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Story = ({ user }) => {
  const { name, eventsAttended } = user;
  return (
    <div>
      <center>
        {/* <strong>
                {" "}
                {user?.name || "user"} you have attended{" "}
                {user?.eventsAttended.length || "no"} events.
              </strong> */}
        {/* <p> You have attended {eventsAttended.length} Events.</p> */}

        <Carousel className="card story" fade>
          <Carousel.Item interval={7000}>
            <img
              className="d-block w-100"
              src={require("./assets/welcome.gif")}
              alt="First slide"
            />
            <Carousel.Caption>
              {user ? <h4>Hi {user.name}</h4> : null}{" "}
              <h5>Welcome to the LADs community! </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={require("./assets/welcome.gif")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Team up with other Dads!</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./assets/welcome.gif")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Many more activities are waiting:</h5>
              <p>Adventures, Sports, Gaming and Playdates.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./assets/welcome.gif")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Tap into your hobbies and experience fatherhood in a completely
                new way!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
    </div>
  );
};

export default Story;
