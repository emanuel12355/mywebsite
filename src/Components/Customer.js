import { Container, Typography, Box, Stack, Avatar, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
// Import Images
import img1 from "../Components/Ellipse1.png";
import img2 from "../Components/Ellipse1.png";
import img3 from "../Components/Ellipse2.png";
import img4 from "../Components/Ellipse4.png";
import img5 from "../Components/Ellipse5.png";

function Customer() {
  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      
      {/* Heading Section */}
      <Typography variant="h6" color="text.secondary">
        Why customers love
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Working with us
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mb: 4 }}>
        Without any doubt, I recommend Alcaline Solutions as one of the best web design and digital 
        marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to 
        introduce their work to someone else.
      </Typography>

      {/* Arrows with Reviews */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ position: "relative" }}>
        
        {/* Left Arrow */}
        <IconButton
          sx={{
            border: "2px solid purple",
            color: "purple",
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Reviews Section */}
        <Stack direction="row" justifyContent="center" spacing={4} flexWrap="wrap" sx={{ flex: 1 }}>
          
          {/* User 1 */}
          <Box textAlign="center">
            <Avatar src={img1} sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
            <Stack direction="row" justifyContent="center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#FFD700" }} />)}
            </Stack>
            <Typography variant="body1" mt={1}>Romeena De Silva</Typography>
            <Typography variant="caption" color="text.secondary">Jonet Cosmetics</Typography>
          </Box>

          {/* User 2 */}
          <Box textAlign="center">
            <Avatar src={img2} sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
            <Stack direction="row" justifyContent="center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#FFD700" }} />)}
            </Stack>
            <Typography variant="body1" mt={1}>Romeena De Silva</Typography>
            <Typography variant="caption" color="text.secondary">Jonet Cosmetics</Typography>
          </Box>

          {/* User 3 */}
          <Box textAlign="center">
            <Avatar src={img3} sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
            <Stack direction="row" justifyContent="center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#FFD700" }} />)}
            </Stack>
            <Typography variant="body1" fontWeight="bold" mt={1}>Imran Khan</Typography>
            <Typography variant="caption" color="text.secondary">Software Engineer</Typography>
          </Box>

          {/* User 4 */}
          <Box textAlign="center">
            <Avatar src={img4} sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
            <Stack direction="row" justifyContent="center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#FFD700" }} />)}
            </Stack>
            <Typography variant="body1" mt={1}>Romeena De Silva</Typography>
            <Typography variant="caption" color="text.secondary">Jonet Cosmetics</Typography>
          </Box>

          {/* User 5 */}
          <Box textAlign="center">
            <Avatar src={img5} sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
            <Stack direction="row" justifyContent="center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#FFD700" }} />)}
            </Stack>
            <Typography variant="body1" mt={1}>Romeena De Silva</Typography>
            <Typography variant="caption" color="text.secondary">Jonet Cosmetics</Typography>
          </Box>

        </Stack>

        {/* Right Arrow */}
        <IconButton
          sx={{
            backgroundColor: "purple",
            color: "white",
            "&:hover": { backgroundColor: "#4a0072" },
          }}
        >
          <ArrowForward />
        </IconButton>

      </Stack>
    </Container>
  );
}

export default Customer;
