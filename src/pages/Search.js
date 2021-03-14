import React, {useState} from 'react';
import { Button, Container, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import SearchResults from '../components/SearchResults';

function Search() {
  const [input, setInput] = useState("");

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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(input)
              }}
            >
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="City, State, Country"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
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