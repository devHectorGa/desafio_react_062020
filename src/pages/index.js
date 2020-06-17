import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Posts from "../components/Posts";
import { fetchPostsStart } from "../redux/posts/posts.actions";

const Home = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container maxWidth="sm">
      <Posts />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(Home);
