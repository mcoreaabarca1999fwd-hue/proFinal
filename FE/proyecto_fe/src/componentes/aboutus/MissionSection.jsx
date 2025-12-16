import { Box, Typography, Slide } from "@mui/material";


export default function MissionSection() {
  
  return (
    <Slide in direction="up" timeout={700}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          maxWidth: 1000,
          mx: "auto",
          textAlign: "center",
          bgcolor: "linear-gradient(135deg, #f9f5ff 0%, #f5f5f5 100%)",
          borderRadius: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "#181115", lineHeight: 1.2 }}
        >
          Nuestra Misión
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
        >
        Nuestra misión es brindar educación accesible, clara y confiable sobre el ciclo menstrual y la educación sexual, especialmente a personas que no han tenido la oportunidad de acceder a información adecuada sobre su cuerpo y su salud.
        Buscamos romper mitos, eliminar tabúes y empoderar a través del conocimiento, ofreciendo herramientas educativas y digitales que ayuden a comprender los cambios físicos y emocionales del cuerpo, promoviendo el autocuidado, el bienestar y la toma de decisiones informadas.
        Creemos que el conocimiento es un derecho, no un privilegio, y trabajamos para crear un espacio seguro, inclusivo y respetuoso donde aprender sobre el cuerpo sea natural, sin vergüenza ni miedo.
        </Typography>
      </Box>
    </Slide>
  );
}