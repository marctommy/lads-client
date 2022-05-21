import React from "react";
import { ContactLink } from "./FooterStyles";

export const ContactMe = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F1FAEE",
          borderRadius: 50,
          padding: 10,
          position: "absolute",
          marginTop: -90,
          marginLeft: 130,
        }}
      >
        {" "}
        <i className=" bi bi-linkedin">
          <ContactLink
            style={{ marginLeft: 5 }}
            href="https://www.linkedin.com/in/marctommy/"
          >
            Let's connect!
          </ContactLink>
        </i>
      </div>

      <div
        style={{
          backgroundColor: "#F1FAEE",
          borderRadius: 50,
          padding: 10,
          position: "absolute",
          marginTop: -20,
          marginLeft: 110,
        }}
      >
        {" "}
        <i className="bi bi-whatsapp">
          <ContactLink
            style={{ marginLeft: 5 }}
            href="https://wa.me/00491791096137?text=urlencodedtext"
          >
            Send a Message!
          </ContactLink>
        </i>
      </div>
    </div>
  );
};
