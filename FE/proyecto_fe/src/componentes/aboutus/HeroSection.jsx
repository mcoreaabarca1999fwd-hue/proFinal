import { Box, Typography, Fade } from "@mui/material";

export default function HeroSection() {
  return (
    <Fade in timeout={900}>
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          src="/images/hero.jpg"
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: 800,
            borderRadius: 16,
            marginBottom: 20,
          }}
        />

        <Typography variant="h3" fontWeight="bold" mb={2}>
          Sobre Nosotros
        </Typography>

        <Typography variant="h6" color="text.secondary" maxWidth={700} mx="auto">
          Una empresa dedicada a crear soluciones innovadoras con impacto real.
        </Typography>
      </Box>
    </Fade>
  );
}