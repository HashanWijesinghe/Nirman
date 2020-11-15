import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import {FaEnvelope, FaMobile, FaMapMarkerAlt} from 'react-icons/fa';

import "./ContactUs.css";
import {CONTACT_US} from '../../strings';

const ContactBlock = ({ value, icon }) => {
  return (
    <Col style={{
    justifyContent: 'center'}}>
      <Row style={{ justifyContent: 'center', color: '#00435d', backgroundColor: 'transparent', paddingBottom: '1rem'}}>{icon}</Row>
      <Row style={{ justifyContent: 'center'}}>{value}</Row>
    </Col>
  );
};

const ContactUs = (props) => {
    const {data} = props;
    return (
        <Container className="testamonial-container">
        <h2 className="section-title testamonial-section-header">{CONTACT_US}</h2>
        <Row style={{ justifyContent: "center"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.190076708422!2d80.13869358443351!3d7.056151479308321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3019f409dae13%3A0x2e6bad65d65eea23!2sNirman%20Associates!5e0!3m2!1sen!2slk!4v1605378897261!5m2!1sen!2slk"
            width="1000"
            height="400"
            frameborder="0"
            style={{ border: "0", width: '100%' }}
            className="minimal-shadow"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Row>
        <Row style={{ justifyContent: "space-around", display: "flex", paddingTop: '2rem' }}>
          <ContactBlock value={data.email} icon={<FaEnvelope size="20" />} />
          <div style={{borderColor: 'rgba(0,0,0,0.1)', height: '50px', borderWidth: '1px', borderStyle: 'solid'}}></div>
          <ContactBlock value={data.phone} icon={<FaMobile size="20"  />}/>
          <div style={{borderColor: 'rgba(0,0,0,0.1)', height: '50px', borderWidth: '1px', borderStyle: 'solid'}}></div>
          <ContactBlock value={data.address} icon={<FaMapMarkerAlt size="20"  />}/>
        </Row>
      </Container>
    );
};

export default ContactUs;
