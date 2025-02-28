import { Stack } from "@mui/material"
import Team from "./Firstpage/Team"
import HeroSection from "./Firstpage/HeroSection"
import Services from "./Components/Services"
import Devloper from "./Components/Devloper"
export const MainPage = () => {
    return(
        <Stack>
            <Team />
            <HeroSection />
            <Services/>
            <Devloper/>
        </Stack>
    )
}