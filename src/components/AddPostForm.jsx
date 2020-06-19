import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  toggleAddPostShow,
  submitPostStart,
} from "../redux/posts/posts.actions";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0",

    "& > *": {
      margin: theme.spacing(1),
      width: "95%",
    },
    "& > button": {
      padding: "1rem",
    },
  },
}));

function AddPostForm({ toggleAddPostShow, submitPost }) {
  const classes = useStyles();
  const handleOnToggle = () => toggleAddPostShow();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => submitPost(data);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="title"
        name="title"
        label="Title"
        inputRef={register({ required: true })}
      />
      <TextField
        id="text"
        name="text"
        label="Text"
        inputRef={register({ required: true })}
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleOnToggle}>
        Cancelar
      </Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleAddPostShow: () => dispatch(toggleAddPostShow()),
  submitPost: (data) => dispatch(submitPostStart(data)),
});

export default connect(null, mapDispatchToProps)(AddPostForm);
