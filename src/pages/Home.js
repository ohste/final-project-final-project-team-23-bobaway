import React from 'react';
import { Button, Container, Figure, Row, Col } from 'react-bootstrap';

import boba from '../images/bobadrink.png';

function Home() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col md={12} className="mb-3">
            <Figure>
              <Figure.Image
                width={220}
                alt="boba drink"
                src={boba}
              />
            </Figure>
            <h1>
              Welcome to BobaWay!
            </h1>
          </Col>
          <Col>
            <Button href="/search" variant="primary">
              Start Here
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;