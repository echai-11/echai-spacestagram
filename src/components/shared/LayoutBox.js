import React from "react";
import Box from "@material-ui/core/Box";
import ImageCard from "./ImageCard";
import ButtonWithText from "./ButtonWithText";
import ErrorMessage from "./ErrorMessage";

const LayoutBox = ({
  searchFilter,
  items,
  isFetchingMore,
  fetchMoreError,
  getMorePhotos,
}) => {
  return (
    <React.Fragment>
      <Box
        paddingX={2}
        className={searchFilter !== null ? "filteredLayout" : "layout_box"}
      >
        <div>
          {items &&
            items.length > 0 &&
            items.map((d, i) => {
              return <ImageCard key={`img_${i}`} item={d} />;
            })}
          {items && items.length === 0 && (
            <div>Sorry, no items were available.</div>
          )}
        </div>
        {searchFilter === null && items && (
          <ButtonWithText
            variant="contained"
            disabled={isFetchingMore === true}
            onClick={() => {
              getMorePhotos();
            }}
            className="load_more_btn"
          >
            Load More
          </ButtonWithText>
        )}
        {fetchMoreError === true && <ErrorMessage />}
      </Box>
    </React.Fragment>
  );
};

export default LayoutBox;
