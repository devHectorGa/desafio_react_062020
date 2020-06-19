import { takeLatest, put, call } from "redux-saga/effects";

import PostsActionTypes from "./posts.types";

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  toggleAddPostShow,
  submitPostStart,
  submitPostSuccess,
  submitPostFailure,
} from "./posts.actions";

import {
  getSnapshotFromFetchPostsAsync,
  getSnapshotFromSubmitPostsAsync,
  fetchPostsAsync,
  submitPostsAsync,
  fetchPostsRun,
  submitPostsStart,
} from "./posts.sagas";
