import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
} from "react-bootstrap";
import "./index.css";
import img from "./about.jpg";

function GalleryItem(props) {
  return (
    <Card
      onMouseEnter={() => console.log("enter")}
      onMouseLeave={() => console.log("leave")}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />
      <Card.ImgOverlay>hello</Card.ImgOverlay>
    </Card>
  );
}

export default GalleryItem;
