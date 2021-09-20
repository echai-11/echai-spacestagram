import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingSpinner = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        height: "300px",
      }}
    >
      <CircularProgress color="primary" />
    </Grid>
  );
};

export default LoadingSpinner;
