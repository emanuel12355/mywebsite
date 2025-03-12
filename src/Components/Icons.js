import { Box, Stack } from "@mui/material";
import log1 from '../Components/Logo-6.png';
import log2 from '../Components/Logo-7.png';
import log3 from '../Components/Logo-9.png';
import log4 from '../Components/logo5.png';
import log5 from '../Components/logo8.png';
import log6 from '../Components/logo9.png';
import { CenterFocusStrong } from "@mui/icons-material";

function Icons() {
    return (
        <Stack 
            direction="row" 
            justifyContent="center" 
            spacing={5} 
            bgcolor="border: 1px solid #E7DAED"
            sx={{ border: "2px solid ", padding:"10" , }}
        >
            {[log1, log2, log3, log4, log5, log6].map((src, index) => (
                <Box key={index} component="img" src={src} sx={{ height: "10%", width: "10%" }} />
            ))}
        </Stack>
    );
}

export default Icons;
