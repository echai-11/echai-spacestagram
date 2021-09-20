import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const MUIDatePicker = ({ selectedDate, setSelectedDate, setNewFilterDate }) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        justifyContent="space-around"
        className="date_picker_wrapper"
      >
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          onAccept={(date) => {
            setNewFilterDate(date);
          }}
          placeholder="Date"
          format="MM/dd/yyyy"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default MUIDatePicker;
