import { Container, Box, Typography } from "@mui/material";
import img1 from "../Components/Rectangle 17.png";
import img2 from "../Components/Rectangle 18.png";
import img3 from "../Components/Rectangle 19.png";

function Software() {
  return (
    <Container sx={{ py: 6 }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4">Way of building</Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>Great Software</Typography>
      </Box>

      {/* Case Studies */}
      <Box>
        {[img1, img2, img3].map((img, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: { xs: "column", md: index % 2 === 0 ? "row-reverse" : "row" }, alignItems: "center", p: 3, mb: 3, backgroundColor: "#F8F9FC", borderRadius: "12px", boxShadow: 3 }}>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
              <Box component="img" src={img} alt={`Case Study ${index + 1}`} sx={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>Build the right team to scale</Typography>
              <Typography sx={{ mt: 1, color: "gray" }}>
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term.
              </Typography>
              <Typography sx={{ mt: "5%" }}>Our <Typography component="span" sx={{ color: "red" }}>delivery model</Typography> helps you cut costs and deliver within budget.</Typography>
              <Typography sx={{ mt: "5%", background: "linear-gradient(to right, #F76680, #57007B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Software;
