import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
// reducer is the function that accepts the state and action
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      // '...posts' takes the current posts and then 'action.payload' adds the new post
      return [...posts, action.payload];
    case UPDATE:
      // Here .map() works like .append()
      // post is the parameter taht is checked.
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      // Return all the posts except the one that was deleted.
      // In oreder to implement this, we use a filter to filter out the posts based on the passed ID
      return posts.filter(post => post._id !== action.payload);
    default:
      return posts;
  }
};
