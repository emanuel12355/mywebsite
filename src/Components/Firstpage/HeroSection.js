import { Box, Typography, Container, Button, Stack } from "@mui/material";
import webDevelopmentImg from "./images/web-development.png";
import Ellipse from "./Ellipse 180.png";
function HeroSection() {
  return (
    <Container sx={{ display: "flex",mt:"5%" }}>
      <Box sx={{ textAlign: "left", mt: "5%" }}>
        {/* Heading */}
        <Box sx={{ display: "flex", justifyContent: "left", gap: "0.5rem" }}>
          <Typography variant="h3" sx={{ color: "#4a4a4a" }}>
            Great
          </Typography>
          <Typography
            variant="h3"
            sx={{
              background: "linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Product
          </Typography>
          <Typography variant="h3" sx={{ color: "#4a4a4a" }}>
            is
          </Typography>
        </Box>

        {/* Subheading */}
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#121212", display: "inline" }}
          >
            built by great{" "}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#DE4396",
              display: "inline",
            }}
          >
            teams
          </Typography>
        </Box>

        {/* Description */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: "#4a4a4a" }}>
            We help build and manage a team of world-class developers <br />
            to bring your vision to life.
          </Typography>
        </Box>


        {/* Button */}
        <Box sx={{ mt: "5%" }}>
          <Button variant="contained" color="primary" >
            Let's get started
          </Button>
        </Box>
      </Box>

      {/* Image */}
      <Box component="img" src={webDevelopmentImg} style={{ width: "40%", height: "auto", paddingLeft: "20px" }} alt="Web Development">
        {/* <img src={webDevelopmentImg}  /> */}
      </Box>
      <Box component="img" src={Ellipse} style={{ width: "50px", position: 'absolute', top: '61%', zIndex: 1 }}>

      </Box>
    </Container>
  );
}

export default HeroSection;
