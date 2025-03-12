import { Container, Grid, Box, Typography, Button, Card } from "@mui/material";

// इमेजेज को इम्पोर्ट करें
import img1 from "../Components/Case-study__image.png";
import img2 from "../Components/Case-study__image2.png";
import img3 from "../Components/Case-study__image3.png";

function CaseStudySection() {
    return (
        <Container sx={{ py: 6 }}>
            
            {/* Section Heading */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography variant="h6" sx={{ color: "gray" }}>Our recent</Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>Case studies</Typography>
            </Box>

            {/* Case Study 1 */}
            <Card
  sx={{
    display: 'flex',
    alignItems: 'center',
    p: 3,
    mb: 3,
    backgroundColor: '#E8F0FF',
    borderRadius: '12px',
    boxShadow: 3,
  }}
>
  <Grid container spacing={2} alignItems="center">
    {/* Left - Image */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:'left' }}
    >
      <Box
        component="img"
        src={img1}
        alt="Case Study"
        sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </Grid>

    {/* Right - Text */}
    <Grid item xs={12} md={4}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Website Design for SCFC Canada
      </Typography>
      <Typography sx={{ mt: 1, color: 'gray' }}>
        Born out of a vision, a single-minded objective that puts service before
        anything else, Swift Clearance and Forwarding Corp. surging forth to
        deliver the best services in the shipping and logistics scenario.
      </Typography>
      <Button sx={{ mt: 10, textAlign: 'left', color: 'purple', fontWeight: 'bold' }}>
        Read more &gt;
      </Button>
    </Grid>
  </Grid>

</Card>


            {/* Case Study 2 */}
            <Card
  sx={{
    display: 'flex',
    alignItems: 'center',
    p: 3,
    mb: 3,
    backgroundColor: '#E8F0FF',
    borderRadius: '12px',
    boxShadow: 3,
  }}
>
  <Grid container spacing={2} alignItems="center">
    {/* Left - Image */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:'left' }}
    >
      <Box
        component="img"
        src={img2}
        alt="Case Study"
        sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </Grid>

    {/* Right - Text */}
    <Grid item xs={12} md={4}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Website Design for SCFC Canada
      </Typography>
      <Typography sx={{ mt: 1, color: 'gray' }}>
        Born out of a vision, a single-minded objective that puts service before
        anything else, Swift Clearance and Forwarding Corp. surging forth to
        deliver the best services in the shipping and logistics scenario.
      </Typography>
      <Button sx={{ mt: 10, textAlign: 'left', color: 'purple', fontWeight: 'bold' }}>
        Read more &gt;
      </Button>
    </Grid>
  </Grid>

</Card>


            {/* Case Study 3 */}
            <Card
  sx={{
    display: 'flex',
    alignItems: 'center',
    p: 3,
    mb: 3,
    backgroundColor: '#E8F0FF',
    borderRadius: '12px',
    boxShadow: 3,
  }}
>
  <Grid container spacing={2} alignItems="center">
    {/* Left - Image */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:'left' }}
    >
      <Box
        component="img"
        src={img3}
        alt="Case Study"
        sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </Grid>

    {/* Right - Text */}
    <Grid item xs={12} md={4}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Website Design for SCFC Canada
      </Typography>
      <Typography sx={{ mt: 1, color: 'gray' }}>
        Born out of a vision, a single-minded objective that puts service before
        anything else, Swift Clearance and Forwarding Corp. surging forth to
        deliver the best services in the shipping and logistics scenario.
      </Typography>
      <Button sx={{ mt: 10, textAlign: 'left', color: 'purple', fontWeight: 'bold' }}>
        Read more &gt;
      </Button>
    </Grid>
  </Grid>

</Card>


            {/* Bottom "Read more" link */}
            <Box sx={{ textAlign: "right", mt: 3 }}>
                <Button sx={{  background: "linear-gradient(to right, #F76680, #57007B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>Read more case studies &gt;</Button>
            </Box>

        </Container>
    );
}

export default CaseStudySection;
