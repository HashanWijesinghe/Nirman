import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Projects.css";

const projects = [
  {
    name: "1",
    title: "the cinnomon",
    description: `Mauris dictum mi in porta eleifend. In vulputate ornare ipsum, nec scelerisque tellus iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta sodales euismod. Suspendisse iaculis blandit libero ut elementum. Integer nisi sapien, venenatis sit amet pellentesque id, aliquam at eros.`,
    url:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "2",
    title: "the cinnomon",
    description: `Mauris dictum mi in porta eleifend. In vulputate ornare ipsum, nec scelerisque tellus iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta sodales euismod. Suspendisse iaculis blandit libero ut elementum. Integer nisi sapien, venenatis sit amet pellentesque id, aliquam at eros.`,
    url:
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "3",
    title: "the cinnomon",
    description: `Mauris dictum mi in porta eleifend. In vulputate ornare ipsum, nec scelerisque tellus iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta sodales euismod. Suspendisse iaculis blandit libero ut elementum. Integer nisi sapien, venenatis sit amet pellentesque id, aliquam at eros.`,
    url:
      "https://images.pexels.com/photos/3639540/pexels-photo-3639540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    name: "4",
    title: "the cinnomon",
    description: `Mauris dictum mi in porta eleifend. In vulputate ornare ipsum, nec scelerisque tellus iaculis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta sodales euismod. Suspendisse iaculis blandit libero ut elementum. Integer nisi sapien, venenatis sit amet pellentesque id, aliquam at eros.`,
    url:
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

/**
 * Check if an element is in viewport
 *
 * @param {number} [offset]
 * @returns {boolean}
 */

const Projects = () => {
  let yourElement;
  // const yourElement =
  const isInViewport = (offset = 0) => {
    if (!yourElement) return false;
    const top = yourElement.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        console.log("gggg");
        if (isInViewport()) {
          console.log("bird in the nest");
          yourElement.classList.add("visiblegg");
        } else {
          yourElement.classList.remove("visiblegg");
        }
      },
      true
    );
  });

  return (
    <Container
      style={{
        marginBottom: "4rem",
        paddingTop: "4rem",
        // paddingBottom: "4rem",
      }}
    >
      <h2 className="section-title section-header">Latest Projects</h2>
      <Row
        ref={(el) => (yourElement = el)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        {projects.map((project) => (
          <Col md={6}>
            <div className="img-hover-zoom">
              <div
                className="img minimal-shadow"
                style={{
                  marginBottom: "2rem",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url("${project.url}")`,
                  height: "400px",
                  backgroundSize: "cover",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignContent: "center",
                }}
              ></div>
              <div className="overlay-text">
                <h3 className="image-header">{project.title}</h3>
                <p className="image-desc">{project.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
