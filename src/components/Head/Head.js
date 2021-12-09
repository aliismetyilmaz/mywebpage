import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Head.css";

function Head() {
  return (
    <Card className="text-center">
      <Card.Header>Ali İsmet Yılmaz</Card.Header>
      <Card.Body>
        <Card.Title>Product Manager</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Card.Link
              className="Head-bread"
              href="https://github.com/aliismetyilmaz"
              target="_blank"
            >
              GitHub
            </Card.Link>
          </Col>
          <Col md="auto">
            <Card.Link
              className="Head-bread"
              href="https://www.linkedin.com/in/ali-ismet-yilmaz/"
              target="_blank"
            >
              Linkedin
            </Card.Link>
          </Col>
          <Col xs lg="2">
            <Card.Link
              className="Head-bread"
              href="mailto:aliismety36@gmail.com"
            >
              Contact me
            </Card.Link>
          </Col>
        </Row>{" "}
      </Card.Footer>
    </Card>
  );
}

export default Head;
