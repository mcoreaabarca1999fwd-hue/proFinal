import { Box, Typography, Slide } from "@mui/material";

export default function MissionSection() {
  return (
    <Slide in direction="up" timeout={700}>
      <Box sx={{ py: 8, px: 3, maxWidth: 1000, mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Nuestra Misión
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Brindar soluciones de alta calidad que mejoren la vida de nuestros clientes,
          impulsando el crecimiento mediante tecnología y dedicación.
        </Typography>

        <img
          src="/images/mission.jpg"
          alt="Mission"
          style={{ width: "100%", borderRadius: 12 }}
        />
      </Box>
    </Slide>
  );
}