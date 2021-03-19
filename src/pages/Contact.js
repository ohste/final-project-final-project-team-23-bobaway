import React, { useState } from 'react';
import { Card, Container, Row, Col, Jumbotron, Form, Button } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const ButtonHandler = () => {
    setName("");
    setEmail("");
    setFeedback("");
  }

  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col className="mb-3">
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <b>We want to hear from you!</b>
                </Card.Title>
                <Card.Text>
                  This is our first full-fletch website with React. We know
                  there must be bugs everywhere so if you see anything then just
                  let us know! We appreciate all types of feedback so don't be
                  afraid to send them to us!
                </Card.Text>
                <Card.Text>
                  If you think there are features that we can add to our website
                  then let us know! We want to improve your experience to
                  fullest and to achieve that goal, we would love some ideas and
                  tips.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter feedback..."
                    />
                  </Form.Group>
                  <Form.Text className="text-muted mb-3">
                      We'll never share your information with consent.
                    </Form.Text>
                  <Button onClick={ButtonHandler} variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;