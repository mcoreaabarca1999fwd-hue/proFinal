import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpaIcon from "@mui/icons-material/Spa";

export default function Predictions() {
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
      <Typography variant="h6" fontWeight="bold" mb={3} sx={{ color: "#181115" }}>
        Predicciones
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <PredictionCard
          icon={<CalendarMonthIcon />}
          label="Próximo período"
          value="28 de junio"
        />

        <PredictionCard
          icon={<FavoriteIcon />}
          label="Ventana fértil"
          value="12 - 17 de junio"
          borderColor="var(--primary-dark)"
          highlight
        />

        <PredictionCard
          icon={<SpaIcon />}
          label="Próxima ovulación"
          value="16 de junio"
        />
      </Box>
    </Box>
  );
}

function PredictionCard({ icon, label, value, borderColor, highlight }) {
  return (
    <Box
      sx={{
        border: borderColor ? `2px solid ${borderColor}` : "1px solid #e5e5e5",
        p: 2.5,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "all 0.3s ease",
        bgcolor: highlight ? "rgba(123,44,191,0.05)" : "transparent",
        "&:hover": {
          transform: "translateX(4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          bgcolor: highlight ? "rgba(123,44,191,0.1)" : "#fafafa"
        }
      }}
    >
      {/* Ícono */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: "var(--soft-blush)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary-dark)",
          flexShrink: 0,
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.1)" }
        }}
      >
        {icon}
      </Box>

      {/* Texto */}
      <Box>
        <Typography color="var(--medium-gray)" sx={{ fontSize: 14 }}>
          {label}
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#181115" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}