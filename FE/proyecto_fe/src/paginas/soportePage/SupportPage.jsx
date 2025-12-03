import { Box } from "@mui/material";
import NavBar from "../../componentes/educacion/NavBar";  
import SupportContent from "../../componentes/soporte/SupportContent";
import Footer from "../../componentes/homePage/Footer";

export default function SupportPage() {
  return (
    <Box sx={{ backgroundColor: "#FDF7FC", minHeight: "100vh" }}>
      <NavBar />
      <SupportContent />
      <Footer />
    </Box>
  );
}