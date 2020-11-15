import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import "./index.css";
import img from "./about.jpg";
import GalleryItem from "./GalleryItem";

function Gallery() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Featured Projects</h2>
          <br />
        </Col>
      </Row>
      <CardColumns>
        <GalleryItem key={1}/>
        <GalleryItem key={3}/>
        <GalleryItem key={4}/>
        <GalleryItem key={5}/>
        <GalleryItem key={6}/>
      </CardColumns>
    </Container>
  );
}

export default Gallery;
