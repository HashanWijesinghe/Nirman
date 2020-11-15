import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Nav,
} from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./index.css";
import {SOCIAL_LINKS} from '../../mockData';


const SOCIAL_MEDIA = {
  facebook: 'FACEBOOK',
  instagram: 'INSTAGRAM',
  linkedId: 'LINKEDIN',
  twitter: 'TWITTER',
}

const renderSocialIcon = (socialMedia) => {
  switch (socialMedia) {
    case SOCIAL_MEDIA.facebook:
      return <FaFacebookSquare  />;
    case SOCIAL_MEDIA.instagram:
      return <FaInstagramSquare />;
    case SOCIAL_MEDIA.linkedId:
      return <FaTwitterSquare />;
    case SOCIAL_MEDIA.twitter:
      return <FaTwitterSquare />;
      default: return null;
  }
};

function Footer(props) {
  return (
    <Row>
      <Container fluid className="footer">
        {/* <div>
          <Nav className="justify-content-center">
            {SOCIAL_LINKS.map(link=>(
                <Nav.Item>
                  <Nav.Link href={`${link.url}`} className="footer-social-icons">
                    <FaFacebookSquare />
                  </Nav.Link>
                </Nav.Item>
            ))}
          </Nav>
        </div>
        <hr className="horizontal-rule" />
        <p className="copyright">{props.copyright}</p> */}
      </Container>
    </Row>
  );
}

Footer.defaultProps = {
  copyright: "Copyright © 2020 Nirman Associates",
  facebookLink: "https://facebook.com",
  instaLink: "https://facebook.com",
  twitterLink: "https://facebook.com",
};

export default Footer;
