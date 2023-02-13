import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Box from "@mui/material/Box";
import Navbar from "./Components/Navbar";
import { createTheme, Stack, ThemeProvider } from "@mui/material";

function App() {
const [mode, setMode] = useState("light")

const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})


  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box  bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />

        <Stack direction="row" spacing={2}  justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>

    </>
  );
}

export default App;
