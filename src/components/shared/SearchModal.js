import React, { useState } from "react";

import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MUIDatePicker from "./MUIDatePicker";
import ButtonWithText from "./ButtonWithText";

const SearchModal = (props) => {
  const {
    modalOpen,
    handleModal,
    selectedDate,
    setSelectedDate,
    setSearchFilter,
    setItems,
    searchByDate,
  } = props;
  const [newFilterDate, setNewFilterDate] = useState(null);

  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        handleModal(false);
      }}
      aria-labelledby="search-modal"
      aria-describedby="search-by-date-modal"
      id="searchModal"
    >
      <Grid container className="modal_body">
        <IconButton
          onClick={() => {
            handleModal(false);
          }}
          className="close_btn"
        >
          <CloseIcon />
        </IconButton>
        <Grid item>
          <Typography variant="body1" component="p">
            Search for
          </Typography>
          <Typography variant="body1" component="p">
            NASA's Astronomy Picture of the Day
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            with the date below.
          </Typography>
          <MUIDatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setNewFilterDate={setNewFilterDate}
          />
          <ButtonWithText
            onClick={() => {
              handleModal(false);
              setSearchFilter(newFilterDate);
              setItems([]);
              searchByDate(selectedDate);
            }}
            className="search_btn"
            variant="contained"
            color="primary"
          >
            Search
          </ButtonWithText>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SearchModal;
