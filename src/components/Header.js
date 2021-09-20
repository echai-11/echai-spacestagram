import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar
          classes={{
            root: classes.root,
          }}
        >
          <Typography variant="h6" color="inherit" noWrap>
            Spacestagram
          </Typography>
          <AccountCircleIcon />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
