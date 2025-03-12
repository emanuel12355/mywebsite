import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Container, Link } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

// Importing images correctly
import m1 from "./m1.png";
import m2 from "./m2.png";
import m3 from "./m3.png";
import m4 from "./m4.png";
import m5 from "./m5.png";

// Correctly ordered resources
const resources = [
  { id: 1, image: m1, title: "How to Build a Scalable Application up to 1 Million Users on AWS" },
  { id: 2, image: m2, title: "How to Build a Scalable Application up to 1 Million Users on AWS" },
  { id: 3, image: m3, title: "How to Build a Scalable Application up to 1 Million Users on AWS" },
  { id: 4, image: m4, title: "How to Build a Scalable Application up to 1 Million Users on AWS" },
  { id: 5, image: m5, title: "How to Build a Scalable Application up to 1 Million Users on AWS" },
];

const Images = () => {
  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      {/* Section Title */}
      <Typography variant="h6" color="textSecondary">
        Featured
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        Resources
      </Typography>

      {/* Horizontal Scrollable Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
          overflowX: "auto",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome
        }}
      >
        {resources.map((item) => (
          <Card key={item.id} sx={{ minWidth: 250, borderRadius: 2, boxShadow: 3 }}>
            <CardMedia component="img" height="160" image={item.image} alt={`Resource ${item.id}`} sx={{ borderRadius: "8px 8px 8px 8px" }} />
            <CardContent>
              <Typography variant="body1" fontWeight="bold" textAlign="left">
                {item.title}
              </Typography>
              <Link 
  href="#" 
  color="secondary" 
  sx={{ 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "flex-end",  // Align to the right
    mt: 1, 
    fontWeight: "bold" 
  }}
>
  Read More <ArrowForward fontSize="small" sx={{ ml: 0.5 }} />
</Link>

            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Images;
