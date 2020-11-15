import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
} from "react-bootstrap";
import XSection from '../../shared/Components/Section/Section';

const About = () => {
  return (
    <XSection>
    <Row style={{ justifyContent: "center" }}>
      <Col sm={10} md={8}>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          About Nirman Associates
        </h2>
        <p className="section-para" style={{ textAlign: "center" }}>
          Nirman Associates has been operating as a full service
          landscape/masonry contractor and landscape architectural firm
          since 2007.
        </p>
      </Col>
    </Row>
  </XSection>
  );
}

export default About;
