import { combineReducers } from 'redux';
import { ADD_RATING } from './actions';

function ratingReducer(state = [], action) {
  switch(action.type) {
    case ADD_RATING:
      return [...state, action.rate];
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  rating : ratingReducer,
});

export default rootReducer;