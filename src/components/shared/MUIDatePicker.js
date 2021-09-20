import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const MUIDatePicker = ({ selectedDate, setSelectedDate, setSearchFilter }) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSearchFilter(date);
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
          format="MM/dd/yyyy"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default MUIDatePicker;
