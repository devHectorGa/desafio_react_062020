import { createSelector } from "reselect";

const selectPosts = (state) => state.posts;

export const selectPostsToData = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.data
);
