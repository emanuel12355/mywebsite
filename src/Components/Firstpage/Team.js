import React from "react";
  import { AppBar, Toolbar, Button, Typography, Container, Grid, Box } from "@mui/material";
  import logoImage from "./logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={8} sx={{ borderBottom: 1, borderColor: "divider" , position: 'fixed', zIndex: 999}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <Box component="img" src={logoImage} />
          <Typography variant="body1">JK Developers</Typography>
        </Box>

        <Box sx={{color: 'black'}}>
          <Button sx={{color: 'black'}}>About us</Button>
          <Button sx={{color: 'black'}}>About us</Button>
          <Button sx={{color: 'black'}}>About us</Button>
          <Button sx={{color: 'black'}}>About us</Button>
          <Button sx={{color: 'black'}}>About us</Button>
          <Button sx={{color: 'black'}}>About us</Button>
        </Box>

        <Box>
          <Button variant="contained">Contact us</Button>
        </Box>
      </Toolbar>
    </AppBar>

    
  );
};





export default  Navbar;

