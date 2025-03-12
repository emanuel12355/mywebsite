import React from "react";
import { Container, Grid, Typography, Box, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import log from './Firstpage/logo.png';
import google from '../Components/google-page-speed 1.png';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#fff", borderTop: "2px solid #ddd", py: 5, mt: 8 }}>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="flex-start">
          
          {/* Left Section - Logo & Description */}
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <img src={log} alt="Logo" width={35} height={35} />
              <Typography    variant="h3"
                sx={{
                  fontFamily: "Inspiration, cursive", // Corrected fontFamily syntax
                  fontWeight: 400,
                  fontSize: "32px", // Increased for better visibility
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Jx Developer</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            {/* Google Rating */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <img src={google} alt="Google" style={{ width: "50%", height: "50%" }} />
            </Box>
          </Grid>

          {/* Middle Section - Links */}
          <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Links</Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>About Us</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>Services</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>Case Studies</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>How it works</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>Blog</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block" sx={{ mb: 1 }}>Careers</Link>
              <Link href="#" underline="hover" color="inherit" variant="body2" display="block">Areas We Serve</Link>
            </Box>
          </Grid>

          {/* Right Section - Contact */}
          <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Contact us</Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              +91 9117990252
            </Typography>
          </Grid>
        </Grid>

{/* Social Media Icons */}
<Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
  <Grid item>
    <Box sx={{ display: "flex", gap: 2 }}>
      <IconButton sx={{ bgcolor: "#f8f9fa", width: 45, height: 45, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <Facebook sx={{ fontSize: "20px", color: "#2d2d2d" }} />
      </IconButton>
      <IconButton sx={{ bgcolor: "#f8f9fa", width: 45, height: 45, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <Instagram sx={{ fontSize: "20px", color: "#2d2d2d" }} />
      </IconButton>
      <IconButton sx={{ bgcolor: "#f8f9fa", width: 45, height: 45, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <Twitter sx={{ fontSize: "20px", color: "#2d2d2d" }} />
      </IconButton>
      <IconButton sx={{ bgcolor: "#f8f9fa", width: 45, height: 45, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <LinkedIn sx={{ fontSize: "20px", color: "#2d2d2d" }} />
      </IconButton>
    </Box>
  </Grid>
</Grid>



        {/* Copyright Section */}
        <Typography variant="body2" align="center" sx={{ mt: 3, color: "gray" }}>
          © 2023 Copyright by IK Developers. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
