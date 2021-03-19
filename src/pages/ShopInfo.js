import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import BeautyStars from 'beauty-stars';

import RateBox from '../components/RateBox';

import "./ShopInfo.css";

// https://reactjsexample.com/a-simple-and-beauty-star-rating-for-react/

function ShopInfo() {
  const [stars, setStars] = useState(0);
  const [showRateBox, setShowRateBox] = useState(false);
  const [raterName, setRaterName] = useState("");
  const [raterText, setRaterText] = useState("");
  const [raterStarValue, setRaterStarValue] = useState(0);
  
  // need this for hardcoding
  // useEffect(() => {
  //   setStars(2);
  // })

  const handleClose = () => setShowRateBox(false);
  const handleShow = () => setShowRateBox(true);

  const handleAddRatingBtn = () => {
    console.log("added:", showRateBox);
    setShowRateBox(!showRateBox);
  }

  const handleSubmitRatingBtn = () => {
    console.log(raterName, raterText, raterStarValue);
    console.log("submit button clicked");
  }

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
              <Button onClick={handleAddRatingBtn}>Add Rating</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        <Col md={8} className="mb-3">
          {showRateBox && <RateBox 
                            submitHandle={handleSubmitRatingBtn} 
                            setName={setRaterName}
                            setText={setRaterText}
                            setStarValue={setRaterStarValue}
                          />}
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        <Col md={8} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Text>Address: </Card.Text>
              <Card.Text>Hour: </Card.Text>
              <Card.Text>Description: </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default ShopInfo;