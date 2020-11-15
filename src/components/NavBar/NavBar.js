import React from "react";
import {
  Row,
  Col,
  Jumbotron,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import "./NavBar.css";
import logoBlack from "../../assets/logo-black.svg";
import logoColor from "../../assets/logo-color.svg";
import nirman from '../../assets/logo1.png';
// import nirman from '../../assets/logo3.png';

const navLinks = [
  { name: "Home", url: "#home" },
  { name: "Projects", url: "#home" },
  { name: "Bio", url: "#home" },
  { name: "Blog", url: "#home" },
  { name: "Contact", url: "#home" },
];

const NavBar = () => {
  const renderNavBrand = () => {
    return (
      <Navbar.Brand href="#home">
        <Row className="brand-continer">
        <Image
          src={nirman}
          className="brand-icon"
        />
        <h1 className="brand-text">NIRMAN</h1>
        </Row>
      </Navbar.Brand>
    );
  };
  const renderNavLinks = () => {
    return (
      <Nav>
        {navLinks.map((link) => {
          return <Nav.Link href={link.url}>{link.name}</Nav.Link>;
        })}
      </Nav>
    );
  };

  return (
    <Navbar
      style={{
        backgroundColor: "transparent",
        marginBottom: "-50px",
        zIndex: 9999,
      }}
      expand="md"
      //   bg="dark"
    >
      {/* <Container> */}
      {renderNavBrand()}
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ color: "#fff" }}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        {renderNavLinks()}
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavBar;
