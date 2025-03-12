import { Box, Stack } from "@mui/material";
import log1 from '../Components/Logo-6.png';
import log2 from '../Components/Logo-7.png';
import log3 from '../Components/Logo-9.png';
import log4 from '../Components/logo5.png';
import log5 from '../Components/logo8.png';
import log6 from '../Components/logo9.png';

function Icons() {
    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                backgroundColor: "#F8F8F8", 
                padding: "20px" 
            }}
        >
            <Stack 
                direction="row" 
                justifyContent="center" 
                alignItems="center"
                spacing={8} 
                sx={{ width: "80%" }}
            >
                {[log1, log2, log3, log4, log5, log6].map((src, index) => (
                    <Box 
                        key={index} 
                        component="img" 
                        src={src} 
                        sx={{ height: "80px", width: "auto", maxWidth: "150px" }} 
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default Icons;

