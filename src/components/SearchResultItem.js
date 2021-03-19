import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import BeautyStars from 'beauty-stars';

import './SearchResultItem.css';

function SearchResultItem(props) {
  const {shopInfo} = props;
  console.log("categories", shopInfo);
  shopInfo.categories.map(item => {
    console.log("this: ", item.title)
  })
  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/shops/${shopInfo.id}`}
      >
        <Card className="mb-3" style={{ width: "19rem" }}>
          <Card.Img
            className="boba-card-img"
            variant="top"
            src={shopInfo.image_url}
            key={shopInfo.id}
          />
          <Card.Body>
            <Card.Text>
              <BeautyStars size={16} value={shopInfo.rating} />{" "}
            </Card.Text>
            <Card.Title className="boba-card-title">{shopInfo.name} {shopInfo.price}</Card.Title>
            <Card.Text>
              <b>Address: </b>
              {shopInfo.location.display_address.map((text) => (
                <span> {text}</span>
              ))}
            </Card.Text>
            <Card.Text>
              <b>Phone Number:</b> {shopInfo.display_phone}
            </Card.Text>
            <Card.Text><b>Offers:</b> {shopInfo.categories.map((item) => <li>{item.title}</li>)}</Card.Text>
            <Card.Text>
              <b>Current Status:</b> {shopInfo.is_closed ? "Closed" : "Open"}
            </Card.Text>
            {/* <Card.Text>
              <b>Price:</b> {shopInfo.price}
            </Card.Text> */}
            <Card.Text>
              <b>Transactions: </b>
              {shopInfo.transactions.map((text) => (
                <span>{text}</span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default SearchResultItem;
