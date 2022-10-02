import React from "react";
import { Badge, Media, Card, Container } from "react-bootstrap";
import tedulogo from "../Images/tedu.jpg";
import ssulogo from "../Images/ssu.png";

function Education() {
  return (
    <Container>
      <Card>
        <Card.Header> Education </Card.Header>{" "}
        <Card.Body>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={ssulogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3> Southern States University </h3>
              <h4> Master's Degree, Information of Technology</h4>
              <h4> Specializaton in E-commerce</h4>
              <h6> 2022 - present </h6>
            </Media.Body>{" "}
          </Media>{" "}
          <hr />
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={tedulogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3> TED University </h3>
              <h4> Bachelor's degree, Computer Engineer</h4>
              <h4> Secondry field in Management</h4>
              <h6> 2016 - 2022 </h6>
              <h5>Full Scholarship</h5>
            </Media.Body>{" "}
          </Media>{" "}
        </Card.Body>{" "}
        <Card.Footer>
          <h3> Languages</h3>
          <Badge variant="primary"> Turkish : Native </Badge>{" "}
          <Badge variant="success"> English : Bilingual Proficiency </Badge>{" "}
          <Badge variant="danger"> Russian : Elementary Proficiency </Badge>{" "}
        </Card.Footer>{" "}
        <Card.Footer>
          <h3> Organizations </h3>
          <Badge variant="info"> Tedu Theater Society </Badge>{" "}
        </Card.Footer>{" "}
      </Card>{" "}
    </Container>
  );
}

export default Education;
