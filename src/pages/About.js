import React from 'react';
import { Col, Container, Row, Jumbotron } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col className="mb-3">
            <h1>About</h1>
          </Col>
        </Row>
        <Row className="justify-content-bttween">
          <Col className="mb-3">
            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;