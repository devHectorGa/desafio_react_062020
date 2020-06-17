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
