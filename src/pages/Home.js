import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col md={12} className="mb-3">
            <h1>
              Welcome <br /> to <br /> BobaWay
            </h1>
          </Col>
          <Col>
            <Button href="/search" variant="primary">Start Here</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;