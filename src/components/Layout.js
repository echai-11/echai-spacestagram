import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { DATA } from "../utils/data";
import ImageCard from "./shared/ImageCard";

const Layout = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=100&thumbs=true`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <span>Error: {error}</span>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Box paddingX={2}>
          {items.map((d, i) => {
            return <ImageCard key={`img_${i}`} item={d} />;
          })}
        </Box>
      </React.Fragment>
    );
  }
};

export default Layout;
