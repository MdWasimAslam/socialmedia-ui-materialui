import React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Box from "@mui/material/Box";
import Navbar from "./Components/Navbar";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Box>
        {/* <Navbar /> */}

        <Stack direction="row" spacing={2}  justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
