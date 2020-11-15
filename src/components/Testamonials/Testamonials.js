import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

import './Testamonials.css';
import {TESTAMONIALS} from '../../strings';

const Avatar = ({ name, url }) => {
  return (
    <>
      <Row style={{ justifyContent: "center", marginTop: "0px" }}>
        <Image
          style={{
            alignSelf: "center",
            filter: "grayscale(80%)",
            height: "50px",
            width: "50px",
            objectFit: "cover",
          }}
          src={url}
          roundedCircle
        />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <span
          style={{
            paddingTop: "5px",
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#0000007d",
          }}
        >
          {name}
        </span>
      </Row>
    </>
  );
};

const Testamonials = (props) => {
  const {data} = props;
  
  return (
    <Container className="testamonial-container">
    <Row style={{ justifyContent: "center" }}>
      <h2 className="section-title testamonial-section-header">
        {TESTAMONIALS}
      </h2>
    </Row>
    <Carousel touch={true} fade={true} slide={true} indicators={false} controls={false} wrap={true}>
    {data.map((item) => (
      <Carousel.Item interval={500}>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={6} style={{ flexDirection: "row" }}>
            <p className="section-title content">
              <FaQuoteLeft className="quote-left" />
              {item.comment}
              <FaQuoteRight className="quote-right" />
            </p>
          </Col>
        </Row>
        <Avatar name={item.name} url={item.avatar} />
      </Carousel.Item>
    ))}
    </Carousel>
  </Container>
  );
};

export default Testamonials;
