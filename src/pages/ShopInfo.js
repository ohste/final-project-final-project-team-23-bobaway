import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {useRouteMatch, useParams} from 'react-router-dom';
import BeautyStars from 'beauty-stars';

import "./ShopInfo.css";
const APIkey = 'RX0RyDW9JYbHkUrMKp3REkF51-YsQbZbSagBgXZ4HgpZn2WMPBwXat-LzkxiRHZkCEKbue5Yd2qarbhpxm_Ib3DOpF9dIIaLwc5-I2YQs8V4de5ATm8YJbJaQwtsXnYx'

// https://reactjsexample.com/a-simple-and-beauty-star-rating-for-react/
function useSearch(query){
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${query}`;
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

function ShopInfo() {
  const [stars, setStars] = useState(0);
  const {url, path} = useRouteMatch();
  const shopId = useParams().id;
  console.log("url == ", url, "path ==", path, "params ==", shopId);
  const [data, isLoading, isError, isDone] = useSearch(shopId);
  const isQuerySafe = (!isLoading && !isError && isDone);
  if (isQuerySafe){
    console.log("data is ==", data);
  }

  // need this for hardcoding
  useEffect(() => {
    if (isQuerySafe){
      setStars(data.rating);
    }
    //setStars(2);
  })
  if (isQuerySafe){
    return (
      <Container>
        <Row className="text-center mb-3">
          <Col md={12}>
            <h1>{data.name}</h1>
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
                <Card.Text>{data.location.display_address[0]} </Card.Text>
                <Card.Text>{data.location.display_address[1]}</Card.Text>
                <Card.Text>Phone: {data.display_phone}</Card.Text>
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
  else if(isError){
    return(
      <Container>
      <Row className="text-center mb-3">
        <Col md={12}>
          <h1>Oops, something went wrong</h1>
        </Col>
      </Row>
      </Container>
    )
  }
  else{
    return(
      <Container>
      <Row className="text-center mb-3">
        <Col md={12}>
          <h1>Loading Data</h1>
        </Col>
      </Row>
      </Container>
    )
  }

}

export default ShopInfo;
