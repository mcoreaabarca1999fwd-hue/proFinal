import { Box, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export default function HealthTips({
  phase = "Ovulación",
  tips = [
    { icon: <RestaurantIcon />, title: "Nutrición", text: "Incorpora alimentos ricos en antioxidantes y fibra." },
    { icon: <FitnessCenterIcon />, title: "Ejercicio", text: "Aprovecha tus altos niveles de energía con HIIT o baile." },
    { icon: <SelfImprovementIcon />, title: "Bienestar", text: "Momento ideal para socializar y conectar con otros." }
  ]
}) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        border: "1px solid #e5e5e5",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.12)"
        }
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={4} sx={{ color: "#181115" }}>
        Consejos de Salud: {phase}
      </Typography>

      {tips.map((tip, idx) => (
        <Tip key={idx} icon={tip.icon} title={tip.title} text={tip.text} />
      ))}
    </Box>
  );
}

function Tip({ icon, title, text }) {
  return (
    <Box
      display="flex"
      gap={2}
      mb={4}
      sx={{
        alignItems: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateX(4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderRadius: 2,
          bgcolor: "#fafafa"
        }
      }}
    >
      <Box
        sx={{
          background: "var(--soft-blush)",
          p: 1.5,
          borderRadius: "50%",
          color: "var(--primary-dark)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease, transform 0.3s ease",
          "&:hover": {
            background: "var(--muted-teal)",
            transform: "scale(1.1)"
          }
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography fontWeight="bold" sx={{ color: "#181115" }}>
          {title}
        </Typography>
        <Typography color="var(--medium-gray)" sx={{ fontSize: 14 }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}