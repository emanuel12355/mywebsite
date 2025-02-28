import { Box, Typography, Container, Button, Stack } from "@mui/material";
import webDevelopmentImg from "../Firstpage/images/web-development.png";
import Ellipse from "../Firstpage/Ellipse 180.png";
function HeroSection() {
  return (
    <Container sx={{display:"flex",}}>
      <Box >
        {/* Heading */}
        <Box sx={{ display: "flex", gap: "1rem" , mt: '15%' }}>
          <Typography variant="h2">Great</Typography>
          <Typography variant="h2">Product</Typography>
          <Typography variant="h2">Is</Typography>
        </Box>

        {/* Subheading */}
        <Box>
          <Typography>Built by great</Typography>
          <Typography>Teams</Typography>
        </Box>

        {/* Description */}
        <Box>
          <Typography variant="body1" sx={{ color: "#4a4a4a", mb: 4 }}>
            We help build and manage a team of world-class developers <br />
            to bring your vision to life.
          </Typography>
        </Box>

        {/* Button */}
        <Box>
          <Button variant="contained" color="primary">
            Let's get started
          </Button>
        </Box>
      </Box>

      {/* Image */}
      <Box component="img" src={webDevelopmentImg} style={{ width: "40%", height: "auto", paddingLeft: "20px" }} alt="Web Development">
        {/* <img src={webDevelopmentImg}  /> */}
      </Box>
      <Box component="img" src={Ellipse} style={{width:"10%", height:"2%"}}>

      </Box>
    </Container>
  );
}

export default HeroSection;
