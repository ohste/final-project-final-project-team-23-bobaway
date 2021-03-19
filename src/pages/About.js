import React from 'react';
import { Card, Form, Col, Container, Row, Jumbotron } from 'react-bootstrap';

import AIface1 from '../images/ai_face_1.jpg';
import AIface2 from '../images/ai_face_2.jpg';

function About() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col className="mb-3">
            <h1>About</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={AIface1} />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={AIface2} />
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Text>We are Stephen (left) and Aeijan (right) and we love boba. We love boba so much that we decided to make a website that helps people find boba shops near their area. We are on a mission to have everyone visit a boba shop at least once in their life :). I hope you join us in this journey. #BobaLife</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;