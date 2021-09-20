import React from "react";
import ButtonWithText from "./ButtonWithText";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

const OverlaidSearchButton = (props) => {
  return (
    <ButtonWithText
      {...props}
      variant="contained"
      color="secondary"
      className="overlaid_search_btn"
      elevation={4}
    >
      <ImageSearchIcon className="search_text_icon" />
      <span className="search_text"> Search </span>
    </ButtonWithText>
  );
};

export default OverlaidSearchButton;
