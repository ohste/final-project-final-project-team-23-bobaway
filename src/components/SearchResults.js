import React from 'react';
import { CardDeck } from 'react-bootstrap';

import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
  const result = [1,2,3,4,5,6];
  
  console.log("data in the streets", props.data.businesses);
  const results = props.data.businesses;
  console.log("data ", results);

  return (
    <CardDeck style={{ margin: "0" }}>
      {results.map((item) => (
          <SearchResultItem key={item.id} shopInfo={item} />
      ))}
    </CardDeck>
  );
}

export default SearchResults;