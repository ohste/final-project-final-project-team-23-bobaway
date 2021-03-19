import React, { useState, useEffect } from 'react';
import { Carousel, Button, Card, Col, Container, Row } from 'react-bootstrap';
import {useRouteMatch, useParams} from 'react-router-dom';
import BeautyStars from 'beauty-stars';
import {useSelector, useDispatch} from 'react-redux'

import {addRating} from '../redux/actions';
import {getRatings} from '../redux/selectors';
import Rating from '../components/Rating';
import RateBox from '../components/RateBox';

import Spinner from '../components/Spinner';

import "./ShopInfo.css";

const APIkey = 'RX0RyDW9JYbHkUrMKp3REkF51-YsQbZbSagBgXZ4HgpZn2WMPBwXat-LzkxiRHZkCEKbue5Yd2qarbhpxm_Ib3DOpF9dIIaLwc5-I2YQs8V4de5ATm8YJbJaQwtsXnYx'

// https://reactjsexample.com/a-simple-and-beauty-star-rating-for-react/

/*
This function will used to be fetch a query from the Yelp businesses API
Given a business ID as [query], return the info associated with that business
*/
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
  const [stars, setStars] = useState(1);
  const [showRateBox, setShowRateBox] = useState(false);
  const [raterName, setRaterName] = useState("");
  const [raterText, setRaterText] = useState("");
  const [raterStarValue, setRaterStarValue] = useState(1);
  const dispatch = useDispatch();
  const ratings = useSelector(getRatings);
  const handleClose = () => setShowRateBox(false);
  const handleShow = () => setShowRateBox(true);

  //Opens and closes the 'Add Rating' box
  const handleAddRatingBtn = () => {
    console.log("added:", showRateBox);
    setShowRateBox(!showRateBox);
  }

  //on submit, add the rating to our store and close the rating box
  const handleSubmitRatingBtn = () => {
    console.log(raterName, raterText, raterStarValue);
    console.log("submit button clicked");
    const addRatingAction = addRating(shopId, raterName, raterText, raterStarValue);
    dispatch(addRatingAction);
    setShowRateBox(!showRateBox);
    alert("New Rating Added");
  }

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
  })
  if (isQuerySafe){
    return (
      <Container>
        <Row className="text-center mb-3">
          <Col md={12}>
            <h1><b>{data.name}</b></h1>
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
              {/* <Card.Header>Shop Information</Card.Header> */}
              {/* <Card.Img
                className="boba-shop-card-img"
                variant="top"
                src={data.image_url}
                key={data.id}
              /> */}
              <Carousel>
                {data.photos.map((item) => (
                  <Carousel.Item>
                    <img
                      className="boba-shop-card-img d-block w-100"
                      src={item}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body>
                {/* <Card.Text>{data.location.display_address[0]} </Card.Text>
                <Card.Text>{data.location.display_address[1]}</Card.Text> */}
                <Card.Text>
                  <b>Address:</b>{" "}
                  {data.location.display_address.map((text) => (
                    <span> {text}</span>
                  ))}
                </Card.Text>
                <Card.Text>
                  <b>Phone:</b> {data.display_phone}
                </Card.Text>
                <Card.Text>
                  <b>Offers:</b>{" "}
                  {data.categories.map((item) => (
                    <li>{item.title}</li>
                  ))}
                </Card.Text>
                <Card.Text>
                  <b>Transactions: </b>
                  {data.transactions.map((text) => (
                    <span>{text}</span>
                  ))}
                </Card.Text>
                <Button onClick={handleAddRatingBtn}>Add Rating</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}></Col>
        </Row>

        <Row>
          <Col md={2}></Col>
          <Col md={8} className="mb-3">
            {showRateBox && (
              <RateBox
                submitHandle={handleSubmitRatingBtn}
                setName={setRaterName}
                setText={setRaterText}
                setStarValue={setRaterStarValue}
              />
            )}
            <hr />
          </Col>
          <Col md={2}></Col>
        </Row>

        {ratings.map((rating) =>
          rating.id === shopId ? <Rating {...rating} /> : <></>
        )}
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
          <Spinner/>
        </Col>
      </Row>
      </Container>
    )
  }

}

export default ShopInfo;
