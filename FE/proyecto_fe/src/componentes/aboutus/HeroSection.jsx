import { Box, Typography, Fade, Button, Grow } from "@mui/material";

export default function HeroSection() {
  return (
    <Fade in timeout={900}>
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: 2,
          background: "linear-gradient(135deg, #f9f5ff 0%, #f5f5f5 100%)",
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#181115", lineHeight: 1.2 }}
        >
          Sobre Nosotros
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={4}
          sx={{ lineHeight: 1.6 }}
        >
        En CicloApp, creemos que toda persona merece acceso a información clara, confiable y respetuosa sobre su cuerpo. Sabemos que, en muchos lugares, hablar del ciclo menstrual o de educación sexual sigue siendo un tema rodeado de mitos, silencios y barreras. Por eso, nuestra misión es romper ese ciclo.
        Creamos esta plataforma para educar, acompañar y empoderar a quienes no han tenido acceso a recursos adecuados o que simplemente buscan comprender mejor su bienestar físico y emocional.
        </Typography>

        
        
      </Box>
    </Fade>
  );
}