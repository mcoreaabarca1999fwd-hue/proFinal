import { Box, Typography, Fade } from "@mui/material";

export default function HistorySection() {
  return (
    <Fade in timeout={900}>
      <Box sx={{ py: 8, px: 3, backgroundColor: "#fafafa" }}>
        <Box maxWidth={900} mx="auto">
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Nuestra Historia
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={3}>
            Comenzamos como un pequeño equipo apasionado por cambiar el mundo a
            través de la tecnología. Hoy somos una familia que sigue creciendo.
          </Typography>

          <img
            src="/images/history.jpg"
            alt="History"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </Box>
      </Box>
    </Fade>
  );
}