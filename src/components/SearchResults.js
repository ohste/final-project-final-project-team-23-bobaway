import React from 'react';
import { Link } from 'react-router-dom';
import { CardDeck } from 'react-bootstrap';

import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
  const result = [1,2,3,4,5,6];

  console.log("data in the streets", props.data.businesses);
  const results = props.data.businesses;
  console.log("data ", results);

  const run = () => {
    if(!props.error){
        results.map((item) => (
          <SearchResultItem key={item.id} shopInfo={item} />
        ));
    }
  }

  return (
    <CardDeck style={{ margin: "0" }}>
      {/* {result.map((item) => (
        console.log(item)
      ))} */}

      {results.map((item) => (
        <SearchResultItem key={item.id} shopInfo={item} />
      ))}
    </CardDeck>
  );
}

export default SearchResults;
