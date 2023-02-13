import { Box, List } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";

function Rightbar() {
  return (
    <Box
      bgcolor={"coral"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
