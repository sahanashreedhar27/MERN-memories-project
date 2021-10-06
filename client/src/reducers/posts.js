// reducer is the function that accepts the state and action
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      // '...posts' takes the current posts and then 'action.payload' adds the new post
      return [...posts, action.payload];
    case 'UPDATE':
      // Here .map() works like .append()
      // post is the parameter taht is checked.
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
