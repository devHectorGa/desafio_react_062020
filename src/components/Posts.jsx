import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPostsToData } from "../redux/posts/posts.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5vh 0",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  grid: {
    alignItems: "stretch",
  },
}));

function Posts({ posts }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.grid}>
        {posts
          ? posts.map((post) => (
              <Grid item xs={12} sm={4} key={post.id}>
                <Paper className={classes.paper}>
                  <h2>{post.title.substring(0, 40)}</h2>
                  <p>{post.body}</p>
                </Paper>
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: selectPostsToData,
});

export default connect(mapStateToProps)(Posts);
