import { Icon, Stack } from "@mui/material"
import Team from "./Components/Firstpage/Team"
import HeroSection from "./Components/Firstpage/HeroSection"
import Services from "./Components/Services"
import Devloper from "./Components/Devloper"
import Icons from "./Components/Icons"
import Customer from "./Components/Customer"
// import CashStudy from "./Components/CaseStudySection"
import CaseStudySection from "./Components/CaseStudySection"
import Software from "./Components/Software"
import Design from "./Components/Desgin"
import Appbar from "./Components/Appbar"
import Time from "./Components/Time"
import Images from "./Components/Images"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
export const MainPage = () => {
    return(
        <Stack>
            <Team />
            <HeroSection />
            <Services/>
            <Devloper/>
            <Icons/>
            <Customer/>
            <CaseStudySection/>
            <Software/>
            <Design/>
            <Appbar/>
            <Time/>
            <Images/>
            <Banner/>
            <Footer/>
        </Stack>
    )
}