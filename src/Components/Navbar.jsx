import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsBar = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setopen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Shippuden Network
        </Typography>
        <Diversity3Icon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search" />
        </SearchBar>
        <IconsBar>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setopen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/736x/f6/8a/07/f68a07210b2ceaaeb9ba02846ed84da7.jpg"
          />
        </IconsBar>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/736x/f6/8a/07/f68a07210b2ceaaeb9ba02846ed84da7.jpg"
          />
          <Typography variant="span">Kakashi</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
