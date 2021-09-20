import React from "react";
import Box from "@material-ui/core/Box";
import ImageCard from "./ImageCard";
import ButtonWithText from "./ButtonWithText";
const LayoutBox = ({
  searchFilter,
  items,
  isFetchingMore,
  setIsFetchingMore,
  getMorePhotos,
}) => {
  return (
    <React.Fragment>
      <Box
        paddingX={2}
        className={searchFilter !== null ? "filteredLayout" : ""}
      >
        {console.log(items)}
        {items &&
          items.length > 0 &&
          items.map((d, i) => {
            return <ImageCard key={`img_${i}`} item={d} />;
          })}
        {items && items.length === 0 && (
          <div>Sorry, no items were available.</div>
        )}
        <ButtonWithText
          variant="contained"
          color=""
          disabled={isFetchingMore}
          onClick={() => {
            getMorePhotos();
          }}
        >
          Load More
        </ButtonWithText>
      </Box>
    </React.Fragment>
  );
};

export default LayoutBox;
