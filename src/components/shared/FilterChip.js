import React from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { formatDate } from "../../utils/utils";

const FilterChip = ({ searchFilter, resetFilter }) => {
  const searchDate = formatDate(searchFilter);
  console.log("searchDate", searchDate);
  const handleDelete = () => {
    resetFilter();
  };
  return (
    <React.Fragment>
      <Grid className="filter_wrapper" id="filterWrapperId">
        <Chip label={searchDate} variant="outlined" onDelete={handleDelete} />
      </Grid>
    </React.Fragment>
  );
};
export default FilterChip;
