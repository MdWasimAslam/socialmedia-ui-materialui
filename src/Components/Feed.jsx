import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

function Feed() {
  return (
    <Box bgcolor={"white"} flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://i.pinimg.com/736x/f6/8a/07/f68a07210b2ceaaeb9ba02846ed84da7.jpg"
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Kakashi Hatake"
          subheader="Leader of Team 7"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://www.animatedtimes.com/wp-content/uploads/2021/01/3-8.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kakashi Hatake is a major character of the Naruto franchise and the
            leader of Team 7 later known as Team Kakashi. He later returns as
            one of the main supporting characters in the Boruto: Naruto Next
            Generations anime/manga series.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://i.pinimg.com/736x/f6/8a/07/f68a07210b2ceaaeb9ba02846ed84da7.jpg"
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Kakashi Hatake"
          subheader="Leader of Team 7"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://www.animatedtimes.com/wp-content/uploads/2021/01/3-8.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kakashi Hatake is a major character of the Naruto franchise and the
            leader of Team 7 later known as Team Kakashi. He later returns as
            one of the main supporting characters in the Boruto: Naruto Next
            Generations anime/manga series.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Feed;
