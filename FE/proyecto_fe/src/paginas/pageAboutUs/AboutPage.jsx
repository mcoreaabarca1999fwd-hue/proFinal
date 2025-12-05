import { Box } from "@mui/material";
import NavBar from "../../componentes/educacion/NavBar"
import HeroSection from "../../componentes/aboutus/HeroSection";
import MissionSection from "../../componentes/aboutus/MissionSection";
import HistorySection from "../../componentes/aboutus/HistorySection";
import TeamSection from "../../componentes/aboutus/TeamSection";
import JoinSection from "../../componentes/aboutus/JoinSection";
import Footer from "../../componentes/homePage/Footer";

export default function AboutPage() {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <MissionSection />
      <HistorySection />
      <TeamSection />
      <JoinSection />
      <Footer />
    </Box>
  );
}