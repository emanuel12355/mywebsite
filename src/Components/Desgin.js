import React from "react";
import { Box, Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import { Code, Security, Build, BugReport, Star, Group } from "@mui/icons-material";

const Design = () => {
  return (
    <Box sx={{ textAlign: "left", py: 5, px: 2 }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5">Our design and</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          development approach
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 3, maxWidth: "90%", mx: "auto" }}>
        
        {/* UX Driven Engineering */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#ff6b6b", mr: 2, width: 50, height: 50 }}>
              <Build />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">UX Driven Engineering</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Developing Shared Understanding */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#48dbfb", mr: 2, width: 50, height: 50 }}>
              <Group />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Developing Shared Understanding</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Proven Experience and Expertise */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#ff9f43", mr: 2, width: 50, height: 50 }}>
              <Star />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Proven Experience and Expertise</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Security & Intellectual Property (IP) */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#1dd1a1", mr: 2, width: 50, height: 50 }}>
              <Security />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Security & Intellectual Property (IP)</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Code Reviews */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#feca57", mr: 2, width: 50, height: 50 }}>
              <Code />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Code Reviews</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quality Assurance & Testing */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 4, borderRadius: "16px", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#d63031", mr: 2, width: 50, height: 50 }}>
              <BugReport />
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Quality Assurance & Testing</Typography>
              <Typography variant="body2" color="textSecondary">
                Unlike other companies, we do UX-driven development, ensuring seamless design-to-code experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Design;
