import React from 'react';
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import SearchResults from '../components/SearchResults';

function Search() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col className="mb-3">
            <h1>Search</h1>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={2}></Col>
          <Col md={8} className="my-auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="City, State, Country"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <InputGroup.Append>
                <Button variant="primary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <SearchResults />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;