import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: "100%",
  },
  grid: {
    alignItems: "stretch",
  },
}));

function Post({ post }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} key={post.id}>
      <Paper className={classes.paper}>
        <h2>{post.title.substring(0, 40)}</h2>
        <p>{post.body}</p>
      </Paper>
    </Grid>
  );
}

export default Post;
