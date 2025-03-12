import React from "react";
import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";

const Time = () => {
  return (
    <Container>
      <Box textAlign="center" p={5}>
        {/* Header */}
        <Typography variant="h6" color="textSecondary">
          How development
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          through Alcaline works
        </Typography>

        {/* Timeline Grid */}
        <Grid container spacing={3} justifyContent="center" mt={5} position="relative">
          {/* Timeline Horizontal Line */}
          <Box
            sx={{
              position: "absolute",
              top: "55%",
              left: "10%",
              width: "80%",
              height: "3px",
              backgroundColor: "#E91E63", // PINK LINE
              zIndex: -1,
            }}
          />

          {/* First Row (id 1,2,3) */}
          <Grid container item spacing={5} justifyContent="center">
            {/* Card 1 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #9C27B0", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#9C27B0" }}>
                    #1 Assemble the right team
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #E91E63", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#E91E63" }}>
                    #2 Sprint planning
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #673AB7", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#673AB7" }}>
                    #3 Tech architecture
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Second Row (id 4,5,6) */}
          <Grid container item spacing={5} justifyContent="center" mt={3}>
            {/* Card 4 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #03A9F4", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#03A9F4" }}>
                    #4 Standups & weekly demos
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 5 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #FF4081", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#FF4081" }}>
                    #5 Code reviews
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 6 */}
            <Grid item xs={12} sm={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 2, border: "2px solid #8E24AA", p: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#8E24AA" }}>
                    #6 Iterative delivery
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We divide the implementation process into several checkpoints rather than a single deadline.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Trophy Icon */}
          <Box position="absolute" right="6%" top="50%">
            <EmojiEvents sx={{ fontSize: 40, color: "#FFC107" }} />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Time;
