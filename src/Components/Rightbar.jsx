import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";

function Rightbar() {
  return (
    <Box
      
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed"}} width={300}>
        <Typography variant="h5" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} sx={{flexDirection:"row"}}>
          <Avatar
            alt="Naruto"
            src="https://www.themarysue.com/wp-content/uploads/2022/06/naruto.jpg?fit=1200%2C625"
          />

          <Avatar
            alt="Iruka"
            src="https://qph.cf2.quoracdn.net/main-qimg-dad626d16cbeea7ea52ab8653b716bb5-lq"
          />
          <Avatar
            alt="Sasuke"
            src="https://img.quizur.com/f/img5fa608a1c3b0f4.04463678.jpg?lastEdited=1604716708"
          />
          <Avatar
            alt="Sakura"
            src="https://img1.ak.crunchyroll.com/i/spire4/f81f274cc7eb40a2b77b29f4a96deb341624558819_main.jpg"
          />
        </AvatarGroup>

        <Typography mt={2} mb={2} variant={"h5"} >Latest Post</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419360.jpg" />
          </ImageListItem>

          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419365.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419368.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419353.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419362.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/419321.jpg" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
