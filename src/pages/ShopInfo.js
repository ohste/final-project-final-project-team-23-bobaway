import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ShopInfo() {
  return(
    <Container>
      <Row className="text-center">
        <Col md={12}>
          <h1>Shop Name</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ShopInfo;