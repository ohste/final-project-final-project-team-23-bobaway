import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Error() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h1>404 Error</h1>
            <br />
            <h1>URL not found</h1>
            <br />
            <h1>Oh no! You've made a "boba"</h1>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Error;