import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectAddPostShow,
  selectAddPostsIsSubmit,
} from "../redux/posts/posts.selectors";
import { toggleAddPostShow } from "../redux/posts/posts.actions";
import AddPostForm from "./AddPostForm";
import CircularProgress from "@material-ui/core/CircularProgress";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "25vh",
    position: "absolute",
    width: "95vw",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalForm({ addPostShow, load, toggleAddPostShow }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => toggleAddPostShow();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {load ? <CircularProgress /> : <AddPostForm />}
      <ModalForm />
    </div>
  );

  return (
    <div>
      <Modal open={addPostShow ? addPostShow : false} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  addPostShow: selectAddPostShow,
  load: selectAddPostsIsSubmit,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddPostShow: () => dispatch(toggleAddPostShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
