import { Box, Typography } from "@mui/material";

export default function DayOverview() {
  return (
    <Box sx={{
      bgcolor: "white",
      p: 4,
      borderRadius: 3,
      border: "1px solid #e5e5e5",
      textAlign: "center"
    }}>

      <Box sx={{ width: 180, height: 180, mx: "auto", position: "relative" }}>
        <svg width="180" height="180">
          <circle cx="90" cy="90" r="80" stroke="var(--soft-blush)" strokeWidth="10" fill="none" />
          <circle cx="90" cy="90" r="80" stroke="var(--primary-dark)" strokeWidth="10" fill="none"
            strokeDasharray="502"
            strokeDashoffset="251"
            transform="rotate(-90 90 90)"
          />
        </svg>

        <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h2" fontWeight="bold">15</Typography>
          <Typography color="var(--medium-gray)">de 28 días</Typography>
        </Box>
      </Box>

      <Typography variant="h5" fontWeight="bold" mt={2}>Día 15: Fase de Ovulación</Typography>
      <Typography color="var(--medium-gray)" mt={1}>
        Tu ventana fértil está abierta. Basado en los datos registrados.
      </Typography>

    </Box>
  );
}
