import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col, InputGroup, Form, FormControl } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
import fetch from 'isomorphic-unfetch';
const APIkey = 'RX0RyDW9JYbHkUrMKp3REkF51-YsQbZbSagBgXZ4HgpZn2WMPBwXat-LzkxiRHZkCEKbue5Yd2qarbhpxm_Ib3DOpF9dIIaLwc5-I2YQs8V4de5ATm8YJbJaQwtsXnYx'

function useSearch(query){
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${query}&categories=bubbletea`;
  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setIsLoading(true);
      setIsError(false);
      setIsDone(false);

      try{
        const res = await fetch(url,
        { headers: {
            "Authorization": `Bearer ${APIkey}`,
            "Access-Control-Allow-Origin":"*"
            },
          signal: controller.signal, }
        );
        responseBody = await res.json();
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request aborted");
        } else{
          console.log("We got an error:", e);
          setIsError(true);
        }
      }

      if (!ignore){
        console.log('RESPONSEBODY==', responseBody);
        setRepos(responseBody || []);
        setIsLoading(false);
        setIsDone(true);
      }
    }
    if (query){
      fetchSearchResults();
    }
    return () => {
      controller.abort();
      ignore = true;
    }
  }, [ query ]);
  return [repos,isLoading,isError, isDone];
}

function Search() {
  const [input, setInput] = useState("");
  const [data, isLoading, isError, isDone] = useSearch("");
  const isQuerySafe = (!isLoading && !isError && isDone);
  console.log("data is ==", data);
  console.log("isLoading ==", isLoading);
  console.log("isError ==", isError);
  console.log("isDone ==", isDone);


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
                console.log(input);
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
            {/* {isLoading ? <h1>Find boba near your city!</h1> : <h1></h1>} */}
            {isDone ? <SearchResults data={data} /> : <h1></h1>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
