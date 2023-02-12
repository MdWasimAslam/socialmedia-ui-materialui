import React from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { styled, Typography } from "@mui/material";
import { margin } from "@mui/system";

function App() {
  const BlueBtn = styled(Button)({
    backgroundColor: "blue",
    color: "white",
    margin: "5",
    "&:hover": {
      backgroundColor: "gray",
      color: "black",
    },
  });

  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<SettingsIcon />}
      >
        Contained
      </Button>
      <Button variant="contained" color="success" startIcon={<AddIcon />}>
        Outlined
      </Button>

      <Typography variant="h1" component="h2">
        I am mui H1 Tag
      </Typography>

      <Button
        sx={{
          backgroundColor: "salmon",
          color: "#888",
          margin: "5",
          "&:hover": {
            backgroundColor: "gray",
            color: "black",
          },
        }}
      >
        My Unique Button
      </Button>

      <BlueBtn>My Custom Btn</BlueBtn>
    </>
  );
}

export default App;
