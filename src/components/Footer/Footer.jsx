import React, { useState } from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ContactMe } from "./ContactMe";
const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="back">
      <Box style={{ bottom: 0 }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          the LADs - local awesome dads
        </h1>{" "}
        <h3 style={{ color: "white", textAlign: "center", paddingBottom: 50 }}>
          #1 growing dad social platform
        </h3>
        <Container>
          <Row>
            <Column>
              <Heading>Contact Marc</Heading>

              <img
                style={{
                  borderRadius: 100,
                  widht: 140,
                  height: 160,
                }}
                src={require("../assets/profile.gif")}
                alt="tag"
                onClick={handleDetails}
              />
              {showDetails ? <ContactMe /> : null}
            </Column>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
            </Column>

            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </FooterLink>
            </Column>
            <Column>
              <Heading>Friends</Heading>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>GetYourGuide</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Decathlon</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Elon Musk</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Ironhack</span>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
