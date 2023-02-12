import React from "react";
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';


function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" size="small" startIcon={<SettingsIcon/>}>Contained</Button>
      <Button variant="contained" color="success" startIcon={<AddIcon/>} >Outlined</Button>
    </>
  );
}

export default App;
