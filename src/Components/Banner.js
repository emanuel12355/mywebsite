import { Container, Button, Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Container
      sx={{
        mt:"10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
        padding: "5%",
        width:"70%",
        
        borderRadius: "10px",
      }}
    >
      {/* Left Section */}
      <Box>
        <Typography variant="h5" fontWeight="bold" >
          Hire the best developers and <br></br>designers around!
        </Typography>

      </Box>

      {/* Right Section */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #ff6b6b, #ffa07a)",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          Hire Top Developers
        </Button>
        {/* Decorative Lines */}
        <Box
        //   sx={{
        //     position: "absolute",
        //     width: "80px",
        //     height: "80px",
        //     borderRadius: "50%",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     "&::before, &::after": {
        //       content: '""',
        //       position: "absolute",
        //       width: "100%",
        //       height: "100%",
        //       border: "2px solid #ffa07a",
        //       borderRadius: "50%",
        //       animation: "pulse 1.5s infinite",
        //     },
        //   }}
        />
      </Box>
    </Container>
  );
}

export default Banner;
