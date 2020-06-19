import { createSelector } from "reselect";

const selectPosts = (state) => state.posts;

export const selectPostsToData = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.data
);

export const selectLoadStateToData = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.isFetching
);

export const selectAddPostShow = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.showAddPost
);

export const selectAddPostData = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.addPost
);

export const selectAddPostsIsSubmit = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.isSubmit
);

export const selectCountPosts = createSelector(
  [selectPosts],
  (dataPosts) => dataPosts.data.length
);
