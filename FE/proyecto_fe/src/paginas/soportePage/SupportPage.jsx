import { Box } from "@mui/material";
import Header from "../../componentes/soporte/Header";
import SupportContent from "../../componentes/soporte/SupportContent";

export default function SupportPage() {
  return (
    <Box sx={{ backgroundColor: "#FDF7FC", minHeight: "100vh" }}>
      <Header />
      <SupportContent />
    </Box>
  );
}