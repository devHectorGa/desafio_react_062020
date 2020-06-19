import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  submitPostSuccess,
  submitPostFailure,
} from "./posts.actions";
import PostsActionTypes from "./posts.types";

export function* getSnapshotFromFetchPostsAsync() {
  try {
    const res = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
    const data = yield res.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* getSnapshotFromSubmitPostsAsync({ title, text, userId }) {
  try {
    const res = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          body: text,
          userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = yield res.json();
    yield put(submitPostSuccess(data));
  } catch (error) {
    yield put(submitPostFailure(error.message));
  }
}

export function* fetchPostsAsync() {
  try {
    const res = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
    const data = yield res.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* submitPostsAsync({ payload: { title, text, userId } }) {
  try {
    const res = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          body: text,
          userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = yield res.json();
    yield put(submitPostSuccess(data));
  } catch (error) {
    yield put(submitPostFailure(error.message));
  }
}

export function* fetchPostsRun() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsAsync);
}

export function* submitPostsStart() {
  yield takeLatest(PostsActionTypes.SUBMIT_POST_START, submitPostsAsync);
}

export default function* postsSagas() {
  yield all([call(fetchPostsRun), call(submitPostsStart)]);
}
