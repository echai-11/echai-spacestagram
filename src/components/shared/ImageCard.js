import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ButtonWithText from "./ButtonWithText";
import Divider from "@material-ui/core/Divider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const ImageCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [imageStatus, setImageStatus] = useState("loading");
  const {
    copyright,
    date,
    explanation,
    media_type,
    thumbnail_url,
    hdurl,
    title,
    url,
  } = props.item;

  const handleCollapse = () => {
    setExpanded(!expanded);
  };

  const handleImageLoaded = () => {
    setImageStatus("loaded");
  };
  const handleImageError = () => {
    setImageStatus("error");
  };
  return (
    <React.Fragment>
      <Card className="image_card" elevation={4}>
        <CardContent>
          <Grid
            className="image_card_img_container"
            style={
              imageStatus === "loading"
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <a
              href={media_type === "image" ? hdurl : url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={media_type === "image" ? url : thumbnail_url}
                alt={title}
                className="image_card_img"
                onLoad={handleImageLoaded}
                onError={handleImageError}
              />
              {media_type !== "image" && (
                <div className="dead_icon">
                  <PlayCircleOutlineIcon />
                </div>
              )}
            </a>
          </Grid>
          {/* FIX UP STYLE HERE */}
          <Grid
            style={
              imageStatus === "loading"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Loading . . .
          </Grid>
          {/* FIX UP STYLE ABOVE */}
          <Typography
            gutterBottom
            variant="body1"
            component="h3"
            className="card_image_title"
          >
            {title}
          </Typography>
          <Typography variant="caption" component="p">
            {copyright ? copyright + "," : ""} {date ? date : ""}
          </Typography>
        </CardContent>
        <Divider light />
        <CardActions>
          <ButtonWithText onClick={handleCollapse}>
            Description {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ButtonWithText>
          <IconButton
            onClick={() => {
              setLiked(!liked);
            }}
            className={`image_card_like_btn ${liked ? "liked" : "not_liked"}`}
          >
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
        <Grid>
          <Collapse
            in={expanded}
            timeout="auto"
            collapsedSize="0px"
            unmountOnExit
          >
            <CardContent className="collapsed_content">
              <Typography variant="body2" color="textSecondary" component="p">
                {explanation}
              </Typography>
            </CardContent>
          </Collapse>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default ImageCard;
