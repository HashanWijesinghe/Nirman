import React from "react";
import { Button, Row, Col, Container, Jumbotron } from "react-bootstrap";

import "./Header.css";
import NavBar from "../NavBar/NavBar";

export const BRING_YOUR_IDEAS_TO_LIFE =
  "We'll help you to bring your ideas to life.";

const Header = () => {
  return (
    <header>
      <div
        className="full-height cover-image"
        onScroll={(data) => {
          console.log("onScroll ", data);
        }}
      >
        <NavBar />
        <Container className="cover-text-container" fluid>
          <Row className="cover-text">
            <Col md={1}/>
            <Col md={8}>
              <Col md={6}>
              <h1 fluid className="display-4">{BRING_YOUR_IDEAS_TO_LIFE}</h1>
              <Button variant="flat" className="btn-contact" size="xxl">
                Lets Talk
              </Button>
              </Col>
              <Col md={1}/>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
