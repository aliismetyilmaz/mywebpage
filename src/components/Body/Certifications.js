import React from "react";
import { Badge, Media, Alert, Card, Container } from "react-bootstrap";
import courseralogo from "../Images/coursera.png";
function Certificates() {
  return (
    <Container>
      <Card>
        <Card.Header> Certificates </Card.Header>{" "}
        <Card.Body>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={courseralogo}
              alt="Coursera Logo"
            />
            <Media.Body>
              <h3> Data Science by John Hopkin University </h3>
              <h5> 2020</h5>
              <Badge variant="primary"> R Programming </Badge>{" "}
              <Badge variant="secondary"> Rstudio </Badge>{" "}
              <Badge variant="danger"> Data Science </Badge>{" "}
              <Badge variant="success"> Data Analysis </Badge>{" "}
              <Badge variant="warning"> Data Manipulation </Badge>{" "}
              <Badge variant="info"> Data Cleansing </Badge>{" "}
            </Media.Body>{" "}
          </Media>{" "}
          <hr />
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={courseralogo}
              alt="Coursera Logo"
            />
            <Media.Body>
              <h3> Software Product Management </h3>
              <h5> 2021</h5>
              <Badge variant="primary"> Product Management </Badge>{" "}
              <Badge variant="success"> Project Management </Badge>{" "}
              <Badge variant="secondary"> Scrum </Badge>{" "}
              <Badge variant="danger"> Agile Software Development </Badge>{" "}
              <Badge variant="warning"> User Stories </Badge>{" "}
              <Badge variant="info"> Software Requirements </Badge>{" "}
            </Media.Body>{" "}
          </Media>{" "}
        </Card.Body>{" "}
        <Card.Footer> </Card.Footer>{" "}
      </Card>
    </Container>
  );
}

export default Certificates;
