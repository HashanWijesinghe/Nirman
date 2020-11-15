import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { Container, Row, Nav } from "react-bootstrap";
import './FooterBar.css'

const FooterBar = () => {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#1a1b1f", justifyContent: "center" }}>
        <div>
          <Nav className="justify-content-center" activeKey="/home">
            {/* {props.facebookLink !== "" ? ( */}
            <Nav.Item>
              <Nav.Link href="/home" className="footer-social-icon">
                <FaFacebookSquare/>
              </Nav.Link>
            </Nav.Item>
            {/* {props.instaLink !== "" ? ( */}
            <Nav.Item>
              <Nav.Link href="/home" className="footer-social-icon">
                <FaInstagramSquare />
              </Nav.Link>
            </Nav.Item>
            {/* ) : null} */}
            {/* {props.twitterLink !== "" ? ( */}
            <Nav.Item>
              <Nav.Link href="/home" className="footer-social-icon">
                <FaTwitterSquare />
              </Nav.Link>
            </Nav.Item>
            {/* ) : null} */}
          </Nav>
        </div>
      </Row>
      <Row
        style={{
          backgroundColor: "#343a40",
          padding: "0.5rem",
          justifyContent: "center",
        }}
      >
        <small style={{ color: "#838e99" }}>
          Copyright © 2020 Nirman Associates
        </small>
      </Row>
    </Container>
  );
};

export default FooterBar;
