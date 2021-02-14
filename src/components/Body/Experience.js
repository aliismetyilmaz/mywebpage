import React from "react";
import { Badge, Media, Alert, Card, Container } from "react-bootstrap";

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
              src="holder.js/64x64"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5> Media Heading </h5>{" "}
              <p>
                Cras sit amet nibh libero, in gravida nulla.Nulla vel metus
                scelerisque ante sollicitudin commodo.Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis.Fusce
                condimentum nunc ac nisi vulputate fringilla.Donec lacinia
                congue felis in faucibus.{" "}
              </p>{" "}
              <p>
                Donec sed odio dui.Nullam quis risus eget urna mollis ornare vel
                eu leo.Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.{" "}
              </p>{" "}
              <div>
                <Badge variant="primary"> Primary </Badge>{" "}
                <Badge variant="secondary"> Secondary </Badge>{" "}
                <Badge variant="success"> Success </Badge>{" "}
                <Badge variant="danger"> Danger </Badge>{" "}
                <Badge variant="warning"> Warning </Badge>{" "}
                <Badge variant="info"> Info </Badge>{" "}
                <Badge variant="light"> Light </Badge>{" "}
                <Badge variant="dark"> Dark </Badge>{" "}
              </div>{" "}
            </Media.Body>{" "}
          </Media>{" "}
        </Card.Body>{" "}
        <Card.Footer> </Card.Footer>{" "}
      </Card>{" "}
    </Container>
  );
}

export default Experience;
