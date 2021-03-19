import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import './SearchResultItem.css';
function SearchResultItem(props) {
  const {shopInfo} = props;
  return (
    <div>
<<<<<<< HEAD
      <Card className="mb-3" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={shopInfo.image_url} key={shopInfo.id} />
        <Card.Body>
          <Card.Title>{shopInfo.name}</Card.Title>
          <Card.Text>Phone Number: {shopInfo.display_phone}</Card.Text>
          <Card.Text>
            Address:{" "}
            {shopInfo.location.display_address.map((text) => (
              <span> {text}</span>
            ))}
          </Card.Text>
          <Card.Text>
            Now: {shopInfo.is_closed ? "Closed" : "Open"}
          </Card.Text>
          <Card.Text>
            Transactions:{" "}
            {shopInfo.transactions.map((text) => (
              <span>{text} | </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
=======
      <Link to={`/shops/${shopInfo.id}`}>
        <Card className="mb-3" style={{ width: "19rem" }}>
          <Card.Img variant="top" src={shopInfo.image_url} key={shopInfo.id} />
          <Card.Body>
            <Card.Title>{shopInfo.name}</Card.Title>
            <Card.Text>{shopInfo.display_phone}</Card.Text>
            <Card.Text>
              Address:{" "}
              {shopInfo.location.display_address.map((text) => (
                <span> {text}</span>
              ))}
            </Card.Text>
            <Card.Text>
              Status: {shopInfo.is_closed ? "Closed" : "Open"}
            </Card.Text>
            <Card.Text>
              Transactions:{" "}
              {shopInfo.transactions.map((text) => (
                <span>{text} | </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
>>>>>>> 111e818ccf60056c4b979a7cfaa206406a4199d7
    </div>
  );
}

export default SearchResultItem;
