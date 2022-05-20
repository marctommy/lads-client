import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: #1d3557;
  margin-top: 90px;
  bottom: 0;
  width: 100%;
  ${"" /* position: fixed; */}
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #a8dadc;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const ContactLink = styled.a`
  color: #457b9d;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  font-style: normal;
  &:hover {
    color: #a8dadc;
    transition: 200ms ease-in;
  }
`;
