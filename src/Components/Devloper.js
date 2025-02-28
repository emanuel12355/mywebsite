import React from "react";
import { Typography, Box, Container, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import About from "../Components/Abou-us-Video.png";

function Developer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        mt: "10%",
      }}
    >
      {/* Left Side - Text Content */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Leading companies trust us
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
          to develop software
        </Typography>

        <Typography variant="body1" color="text.secondary">
          We add development capacity to tech teams. Our value isn't limited
          to building teams but is equally distributed across the project lifecycle.
          We are a custom software development company that guarantees the 
          successful delivery of your project.
        </Typography>

        <Typography variant="h6" mt="5%">
          See more information <ArrowForward />
        </Typography>

        <Typography variant="h6" mt="30%">
          Meet the people
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          We are working with
        </Typography>
      </Box>

      {/* Right Side - Image */}
      <Box
        component="img"
        src={About}
        alt="About Us Video"
        sx={{
          width: { xs: "100%", md: "45%" },
          height: "50%",
          paddingBottom: "12%",
          mt: { xs: 4, md: 0 },
        }}
      />

      {/* Arrow Buttons - Navigation */}
      <Box sx={{ display: "flex", gap: 2, paddingTop:"40%", mt: { xs: 4, md: 0 } }}>
        <IconButton
          sx={{
            border: "2px solid purple",
            color: "purple",
          }}
        >
          <ArrowBack />
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: "purple",
            color: "white",
            "&:hover": { backgroundColor: "#4a0072" },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Developer;
