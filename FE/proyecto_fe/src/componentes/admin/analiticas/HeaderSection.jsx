import { Box, Typography } from "@mui/material";

export default function HeaderSection() {
  return (
    <Box mb={4}>
      <Typography variant="h4" fontWeight="bold">Reportes y Analíticas</Typography>
      <Typography variant="body2" color="textSecondary">
        Genera y visualiza informes detallados sobre las métricas de la aplicación.
      </Typography>
    </Box>
  );
}