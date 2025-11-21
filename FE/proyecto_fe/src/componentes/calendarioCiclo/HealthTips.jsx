import { Box, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export default function HealthTips() {
  return (
    <Box sx={{
      bgcolor: "white",
      p: 4,
      borderRadius: 3,
      border: "1px solid #e5e5e5"
    }}>
      
      <Typography variant="h6" fontWeight="bold" mb={4}>Consejos de Salud: Ovulación</Typography>

      <Tip icon={<RestaurantIcon />} title="Nutrición"
        text="Incorpora alimentos ricos en antioxidantes y fibra." />

      <Tip icon={<FitnessCenterIcon />} title="Ejercicio"
        text="Aprovecha tus altos niveles de energía con HIIT o baile." />

      <Tip icon={<SelfImprovementIcon />} title="Bienestar"
        text="Momento ideal para socializar y conectar con otros." />

    </Box>
  );
}

function Tip({ icon, title, text }) {
  return (
    <Box display="flex" gap={2} mb={4}>
      <Box sx={{
        background: "var(--soft-blush)",
        p: 1,
        borderRadius: "50%",
        color: "var(--primary-dark)"
      }}>
        {icon}
      </Box>

      <Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography color="var(--medium-gray)">{text}</Typography>
      </Box>
    </Box>
  );
}
