import React, { useEffect, useState } from "react";
import OverlaidSearchButton from "./shared/OverlaidSearchButton";
import FilterChip from "./shared/FilterChip";
import LayoutBox from "./shared/LayoutBox";
import { formatDate } from "../utils/utils";
import SearchModal from "./shared/SearchModal";
import LoadingSpinner from "./shared/LoadingSpinner";
import ErrorMessage from "./shared/ErrorMessage";

const Layout = () => {
  const [error, setError] = useState(null);
  const [fetchMoreError, setFetchMoreError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const getPhotos = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&thumbs=true&count=25`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.hasOwnProperty("error")) {
            setError(true);
            setIsLoaded(true);
            return;
          }
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  };
  const getMorePhotos = () => {
    setIsFetchingMore(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&thumbs=true&count=25`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsFetchingMore(false);
          let newResultArray = [...items, ...result];
          setItems(newResultArray);
        },
        (error) => {
          setIsLoaded(true);
          setFetchMoreError(true);
        }
      );
  };
  const fixedScrollListener = () => {
    window.addEventListener("scroll", () => {
      const topBorder = document
        .getElementById("appRoot")
        .getBoundingClientRect().top;
      topBorder >= -55
        ? document.getElementById("filterWrapperId") &&
          document.getElementById("filterWrapperId").classList.remove("fixed")
        : document.getElementById("filterWrapperId") &&
          document.getElementById("filterWrapperId").classList.add("fixed");
    });
  };
  useEffect(() => {
    getPhotos();
    fixedScrollListener();
  }, []);

  const searchByDate = (searchDate) => {
    setIsLoaded(false);
    let formattedSelectedDate = formatDate(searchDate);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&thumbs=true&date=${formattedSelectedDate}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.hasOwnProperty("error")) {
            setError(true);
            setIsLoaded(true);
            return;
          }
          let arrayResult = [];
          arrayResult.push(result);
          setItems(arrayResult);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  };

  const resetFilter = () => {
    setSearchFilter(null);
    setItems([]);
    setIsLoaded(false);
    getPhotos();
  };
  const handleModal = (val) => {
    setModalOpen(val);
  };

  if (error) {
    return <ErrorMessage />;
  } else if (!isLoaded) {
    return <LoadingSpinner />;
  } else {
    return (
      <React.Fragment>
        {searchFilter !== null && error === null && (
          <FilterChip
            searchFilter={searchFilter}
            resetFilter={resetFilter}
            formatDate={formatDate}
          />
        )}

        <LayoutBox
          items={items}
          searchFilter={searchFilter}
          isFetchingMore={isFetchingMore}
          fetchMoreError={fetchMoreError}
          getMorePhotos={getMorePhotos}
        />
        <OverlaidSearchButton
          onClick={() => {
            handleModal(true);
          }}
        />
        <SearchModal
          modalOpen={modalOpen}
          handleModal={handleModal}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSearchFilter={setSearchFilter}
          setItems={setItems}
          searchByDate={searchByDate}
        />
      </React.Fragment>
    );
  }
};

export default Layout;
