import React from 'react';
import { Card } from 'react-bootstrap';

function SearchResultItem(props) {
  const {shopInfo} = props;
  return (
    <div>
      <Card className="mb-3" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={shopInfo.image_url} key={shopInfo.id} />
        <Card.Body>
          <Card.Title>Shop Name: {shopInfo.name}</Card.Title>
          <Card.Text>Phone Number: {shopInfo.display_phone}</Card.Text>
          <Card.Text>
            Address:{" "}
            {shopInfo.location.display_address.map((text) => (
              <span> {text}</span>
            ))}
          </Card.Text>
          <Card.Text>
            Closed: {shopInfo.is_closed ? "Closed" : "Open"}
          </Card.Text>
          <Card.Text>
            Transactions:{" "}
            {shopInfo.transactions.map((text) => (
              <span>{text} | </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchResultItem;