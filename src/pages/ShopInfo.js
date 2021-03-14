import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import BeautyStars from 'beauty-stars';

import "./ShopInfo.css";

// https://reactjsexample.com/a-simple-and-beauty-star-rating-for-react/

function ShopInfo() {
  const [stars, setStars] = useState(0);
  
  // need this for hardcoding
  useEffect(() => {
    setStars(2);
  })

  return (
    <Container>
      <Row className="text-center mb-3">
        <Col md={12}>
          <h1>Shop Name</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center mb-3">
          <BeautyStars value={stars} />
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="mb-3">
          <Card>
            <Card.Header>Shop Information</Card.Header>
            <Card.Body>
              <Card.Text>Address: </Card.Text>
              <Card.Text>Hour: </Card.Text>
              <Card.Text>Description: </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="mb-3">
          <Card>
            <Card.Header>Ratings</Card.Header>
            <Card.Body>
              <Card.Text>Address: </Card.Text>
              <Card.Text>Hour: </Card.Text>
              <Card.Text>Description: </Card.Text>
              <Button>Add Rating</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default ShopInfo;