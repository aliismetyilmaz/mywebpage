import React from "react";
import { Badge, Media, Card, Container } from "react-bootstrap";
import DFlogo from "../Images/df.jpg";
import Joyinlogo from "../Images/joyin.png";
function Experience() {
  return (
    <Container>
      <Card>
        <Card.Header> Experiences </Card.Header>{" "}
        <Card.Body>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={DFlogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h4> Assistant Product Manager </h4>
              <h5> Digital Factory </h5>
              <h6> 2019-2020</h6>
              <hr />
              <h5>
                Digital Factory is a mobile technology company that delivers
                deep strategic insights for mobile engagements, develops
                leading-edge geolocation technology that integrates into a
                brand’s mobile app to enable micro-messaging and increases
                consumer engagement and path to purchase.
              </h5>
              <hr />
              <p>
                ● Assisting product development, strategy, and execution across
                teams.
              </p>
              <p>● Develop and execute detailed product roadmaps.</p>
              <p>
                ● Led design of the new feature which helped the client to drive
                their strategy <b>40%</b> more efficient than the previous
                version.
              </p>
              <hr />
              <Badge variant="primary"> Data Analysis </Badge>{" "}
              <Badge variant="danger"> Product Development </Badge>{" "}
              <Badge variant="secondary"> Agile </Badge>{" "}
              <Badge variant="success"> Design Thinking </Badge>{" "}
            </Media.Body>{" "}
          </Media>
          <hr />
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={Joyinlogo}
              rodundedCircle
              alt="Generic placeholder"
            />
            <Media.Body>
              <h4> Intern </h4>
              <h5> Joyin </h5>
              <h6> 2017-2018</h6>
              <hr />
              <h5>
                Joyin is a social platform that lets users to discover and
                create events.
              </h5>
              <hr />
              <p>● Interaction with users and drawing the road map.</p>
              <p>
                ● Bringing new users and keeping them satisfied with the
                product.
              </p>
              <hr />
              <Badge variant="primary"> Agile </Badge>{" "}
              <Badge variant="secondary"> Strategy Thinking </Badge>{" "}
              <Badge variant="danger"> Product Development </Badge>{" "}
            </Media.Body>{" "}
          </Media>{" "}
        </Card.Body>{" "}
        <Card.Footer> </Card.Footer>{" "}
      </Card>{" "}
    </Container>
  );
}

export default Experience;
