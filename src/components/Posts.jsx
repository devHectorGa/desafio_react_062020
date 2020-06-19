import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "./Post";
import Loader from "./Loader";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectPostsToData,
  selectLoadStateToData,
} from "../redux/posts/posts.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "15vh 0",
    flexGrow: 1,
  },
}));

function Posts({ posts, isFetching }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.grid}>
        {
          (posts == null && isFetching ? (
              <Loader />
            ) : (
              posts.map((post) => <Post key={post.id} post={post} />)
            ))
        }
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: selectPostsToData,
  isFetching: selectLoadStateToData,
});

export default connect(mapStateToProps)(Posts);
