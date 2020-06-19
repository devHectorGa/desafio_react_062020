import PostsActionTypes from "./posts.types";
import postsReducer from "./posts.reducer";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: undefined,
  showAddPost: false,
  isSubmit: false,
};

describe("postReducer", () => {
  it("should return initial state", () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it("should set isFetching state on fetchPostsStart action", () => {
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.FETCH_POSTS_START,
      }).isFetching
    ).toBe(true);
  });
  it("should set data and isFetching state on fetchPostsSuccess action", () => {
    const mockPosts = [{ title: "Hello", text: "word" }];

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: mockPosts,
      }).data
    ).toEqual(mockPosts);

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: mockPosts,
      }).isFetching
    ).toBe(false);
  });

  it("should set errorMessage and isFetchingState fetchPostsFailure action", () => {
    const mockMessage = "This is a error message.";

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.FETCH_POSTS_FAILURE,
        payload: mockMessage,
      }).errorMessage
    ).toBe(mockMessage);

    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.FETCH_POSTS_FAILURE,
        payload: mockMessage,
      }).isFetching
    ).toBe(false);
  });

  it("should set showAddPost toggleAddPostShow action", () => {
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.TOGGLE_ADD_POST_SHOW,
      }).showAddPost
    ).toBe(true);
  });

  it("should set isSubmit submitPostStart action", () => {
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SUBMIT_POST_START,
      }).isSubmit
    ).toBe(true);
  });

  it("should set isSubmit and showAddPost, showAddPost submitPostSuccess action", () => {
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SUBMIT_POST_SUCCESS,
      }).isSubmit
    ).toBe(false);
    expect(
      postsReducer(initialState, {
        type: PostsActionTypes.SUBMIT_POST_SUCCESS,
      }).showAddPost
    ).toBe(false);
  });
});

it("should set errorMessage and isSubmit submitPostFailure action", () => {
  const mockMessage = "This is a error message.";

  expect(
    postsReducer(initialState, {
      type: PostsActionTypes.SUBMIT_POST_FAILURE,
      payload: mockMessage,
    }).errorMessage
  ).toBe(mockMessage);

  expect(
    postsReducer(initialState, {
      type: PostsActionTypes.SUBMIT_POST_FAILURE,
      payload: mockMessage,
    }).isFetching
  ).toBe(false);
});
