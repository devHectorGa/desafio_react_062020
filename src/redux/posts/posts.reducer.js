import PostsActionTypes from "./posts.types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
