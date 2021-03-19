export const ADD_RATING = 'ADD_RATING';

export function addRating(id, name, text, star) {
  return {
    type: ADD_RATING, id, name, text, star
  };
}
