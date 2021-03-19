import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';


function RateBox(props) {

  return (
    <>
      <Card>
        <Card.Header>Rating</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Name"
                onChange={(e) => props.setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Thoughts</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Thoughts..."
                rows={3}
                onChange={(e) => props.setText(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>How many stars would you give this place?</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => props.setStarValue(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button onClick={props.submitHandle}>Submit</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default RateBox;
