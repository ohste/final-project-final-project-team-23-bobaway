import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import BeautyStars from 'beauty-stars';

function Rating({id, name, text, star}){
  return(
    <Row>
      <Col md={2}></Col>
      <Col md={8} className="mb-3">
        <Card>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>{text}</Card.Text>
            <BeautyStars value={star} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}

export default Rating;
