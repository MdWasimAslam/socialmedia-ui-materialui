import { Box, List, Switch } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from '@mui/icons-material/Home';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import SettingsIcon from '@mui/icons-material/Settings';
import LayersIcon from '@mui/icons-material/Layers';
import GroupsIcon from '@mui/icons-material/Groups';
import Person2Icon from '@mui/icons-material/Person2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import shadows from "@mui/material/styles/shadows";

function Sidebar() {
  return (
    <Box bgcolor={"white"}  flex={1} p={2}
         sx={{display:{xs:"none",
               sm:"block",
               }}} >
    <Box sx={{position:"fixed"}}>

          <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <StorefrontIcon/>
            </ListItemIcon>
            <ListItemText primary="Market" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Person2Icon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <ResetTvIcon/>
            </ListItemIcon>
            <ListItemText primary="Reset" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Layers" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <ModeNightIcon/>
            </ListItemIcon>
            <Switch  defaultChecked />
          </ListItemButton>
        </ListItem>


      </List>
      </Box>
    </Box>
  )
}

export default Sidebar