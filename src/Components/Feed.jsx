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
import { Box, Checkbox } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
          <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
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
              src="https://www.themarysue.com/wp-content/uploads/2022/06/naruto.jpg?fit=1200%2C625"
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Naruto Uzumaki"
          subheader="Clown of Team 7"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/770abbb5-93da-47e6-a6f6-1d23ab55f4fd/ddzf6mg-77fbfdeb-c694-4cc4-a739-a008d4d298d8.jpg/v1/fill/w_1024,h_576,q_75,strp/naruto_uzumaki_wallpaper_hd_by_woriix_ddzf6mg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNzcwYWJiYjUtOTNkYS00N2U2LWE2ZjYtMWQyM2FiNTVmNGZkXC9kZHpmNm1nLTc3ZmJmZGViLWM2OTQtNGNjNC1hNzM5LWEwMDhkNGQyOThkOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SKQLop2ksnu4MmcUaRkfLr0jmXXipd5nnERzVbhPXgA  "
          alt="Naruto"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
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
