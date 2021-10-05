import * as api from '../api/index.js';
// Action creators - functions that creates action. They return the action
// Action is an object that has a type and a payload
// With redux thunk, since we will be dealing with async logic we have to add async dispatch funtion.
// This will dispatch or retun an action
// const action = { type: 'FETCH_ALL', payload: [] }; ---> Object
// dispatch(action); ---> return of action
export const getPosts = () => async dispatch => {
  try {
    //   fetch all the data from the API
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
