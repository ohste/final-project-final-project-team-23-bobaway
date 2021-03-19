import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function SearchResultItem(props) {
  const {shopInfo} = props;
  return (
    <div>
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
    </div>
  );
}

export default SearchResultItem;