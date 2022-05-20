import React from "react";
import { ContactLink } from "./FooterStyles";

export const ContactMe = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F1FAEE",
          borderRadius: 50,
          padding: 15,
          position: "absolute",
          marginLeft: 140,
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
          padding: 15,
          position: "absolute",
          marginTop: 30,
          marginLeft: -80,
        }}
      >
        {" "}
        <i className="bi bi-whatsapp">
          <ContactLink
            style={{ marginLeft: 5 }}
            href="https://wa.me/00491791096137?text=urlencodedtext"
          >
            Call or Send a Message!
          </ContactLink>
        </i>
      </div>
    </div>
  );
};
