import PostsActionTypes from "./posts.types";

export const fetchPostsStart = (posts) => ({
  type: PostsActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const toggleAddPostShow = () => ({
  type: PostsActionTypes.TOGGLE_ADD_POST_SHOW,
});

export const submitPostStart = (post) => ({
  type: PostsActionTypes.SUBMIT_POST_START,
  payload: post,
});

export const submitPostSuccess = (data) => ({
  type: PostsActionTypes.SUBMIT_POST_SUCCESS,
  payload: data,
});

export const submitPostFailure = (errorMessage) => ({
  type: PostsActionTypes.SUBMIT_POST_FAILURE,
  payload: errorMessage,
});
