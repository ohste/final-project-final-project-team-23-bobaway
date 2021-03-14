export const ADD_RATING = 'ADD_RATING';

export function addRating(rate) {
  return {
    type: ADD_RATING,
    rate: rate
  };
}