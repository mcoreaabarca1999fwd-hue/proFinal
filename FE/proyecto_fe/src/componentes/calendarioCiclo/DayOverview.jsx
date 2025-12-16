import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

export default function DayOverview({
  day = 15,
  totalDays = 28,
  phase = "Fase de Ovulación",
  message = "Tu ventana fértil está abierta. Basado en los datos registrados."
}) {
  // Animación para el círculo de progreso
  const drawCircle = keyframes`
    from { stroke-dashoffset: 502; }
    to { stroke-dashoffset: ${(502 - (day / totalDays) * 502).toFixed(0)}; }
  `;

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        border: "1px solid #e5e5e5",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.12)"
        }
      }}
    >
      {/* Círculo de progreso */}
      <Box sx={{ width: 180, height: 180, mx: "auto", position: "relative" }}>
        <svg width="180" height="180">
          {/* Fondo */}
          <circle
            cx="90"
            cy="90"
            r="80"
            stroke="var(--soft-blush)"
            strokeWidth="10"
            fill="none"
          />
          {/* Progreso */}
          <circle
            cx="90"
            cy="90"
            r="80"
            stroke="var(--primary-dark)"
            strokeWidth="10"
            fill="none"
            strokeDasharray="502"
            strokeDashoffset={502 - (day / totalDays) * 502}
            transform="rotate(-90 90 90)"
            style={{
              animation: `${drawCircle} 1.2s ease forwards`
            }}
          />
        </svg>

        {/* Texto dentro del círculo */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant="h2" fontWeight="bold" color="var(--primary-dark)">
            {day}
          </Typography>
          <Typography color="var(--medium-gray)">
            de {totalDays} días
          </Typography>
        </Box>
      </Box>

      {/* Información del día */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mt={2}
        sx={{ color: "#181115" }}
      >
        Día {day}: {phase}
      </Typography>
      <Typography color="var(--medium-gray)" mt={1} sx={{ maxWidth: 400, mx: "auto" }}>
        {message}
      </Typography>
    </Box>
  );
}