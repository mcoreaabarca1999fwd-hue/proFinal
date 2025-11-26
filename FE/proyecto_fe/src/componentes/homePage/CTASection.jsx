import { Box, Typography, Button } from "@mui/material";

export default function CTASection() {
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }} textAlign="center" bgcolor="rgba(153,70,236,0.1)" borderRadius={4}>
      <Typography variant="h4" fontWeight="bold" mb={2}>Toma el control de tu bienestar. Hoy.</Typography>
      <Typography color="text.secondary" mb={3}>
        Únete a miles de mujeres que ya están transformando su relación con su cuerpo y su ciclo. El primer paso es el más importante.
      </Typography>
      <Button variant="contained" color="primary">Regístrate Ahora</Button>
    </Box>
  );
}