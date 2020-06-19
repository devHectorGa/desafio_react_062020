import PostsActionTypes from "./posts.types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
  showAddPost: false,
  isSubmit: false,
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
    case PostsActionTypes.TOGGLE_ADD_POST_SHOW:
      return {
        ...state,
        showAddPost: !state.showAddPost,
      };
    case PostsActionTypes.SUBMIT_POST_START:
      return {
        ...state,
        isSubmit: true,
      };
    case PostsActionTypes.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        isSubmit: false,
        showAddPost: false,
      };
    case PostsActionTypes.SUBMIT_POST_FAILURE:
      return {
        ...state,
        isSubmit: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
