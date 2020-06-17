import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchPostsSuccess, fetchPostsFailure } from "./posts.actions";
import PostsActionTypes from "./posts.types";

function* fetchPostsAsync() {
  try {
    const res = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
    const data = yield res.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostsStart() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsAsync);
}

export default function* postsSagas() {
  yield all([call(fetchPostsStart)]);
}
