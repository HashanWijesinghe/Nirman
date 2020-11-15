import React from "react";
import { Container } from "react-bootstrap";

const XSection = (props) => (
  <Container
    fluid={props.fluid}
    style={{
      marginBottom: "4rem",
      paddingTop: "4rem",
      ...props.style
    }}
  >
    {props.children}
  </Container>
);

export default XSection;
