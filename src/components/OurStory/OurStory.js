import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const imageUrl =
  "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=480";
const OurStory = (props) => {
  return (
    <Container
      style={{
        marginBottom: "4rem",
        paddingTop: "4rem",
        // paddingBottom: "4rem",
      }}
    >
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        <Col md={6}>
          <h2 className="section-title">This is Our Story</h2>
          <p className="section-para" style={{ textAlign: "left" }}>
            "We started off with immense hardships and sacrifices. Today we’re
            just as well known for our high quality landscape design,
            construction and maintenance services. Over the years we’ve taken
            great pains to conserve and expand endemic plants and trees that are
            rare, threatened or endangered through our landscape designs and
            constructions. This is one of our main goals in doing something good
            to our world" - Nirman Rathnayaka
          </p>
        </Col>
        <Col md={6} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <div
            className="minimal-shadow"
            style={{
              backgroundImage: `url(${imageUrl})`,
              height: "400px",
              width: "auto",
              backgroundSize: "cover",
              filter: "brightness(0.65)",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurStory;
