import React from 'react';
import { CardDeck } from 'react-bootstrap';

import SearchResultItem from './SearchResultItem';

function SearchResults() {
  const result = [1,2,3,4,5,6];

  return(
    <CardDeck style={{margin:"0"}}>
      {result.map((item) => (
        <SearchResultItem key={item}/>
      ))}
    </CardDeck>
  );
}

export default SearchResults;