import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textTransform: "capitalize",
  },
});

const ButtonWithText = (props) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      classes={{
        root: classes.root,
      }}
      disableRipple
    >
      {props.children}
    </Button>
  );
};
export default ButtonWithText;
