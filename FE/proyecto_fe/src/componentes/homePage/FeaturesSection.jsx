import { Box, Typography, Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import BookIcon from "@mui/icons-material/Book";

const features = [
  {
    icon: <CalendarMonthIcon fontSize="large" sx={{ color: "#7B2CBF" }} />,
    title: "Seguimiento Inteligente",
    desc: "Registra tus síntomas y predice tus próximas menstruaciones y periodos de ovulación con precisión."
  },
  {
    icon: <FavoriteIcon fontSize="large" sx={{ color: "#7B2CBF" }} />,
    title: "Consejos Personalizados",
    desc: "Recibe recomendaciones de nutrición, ejercicio y bienestar adaptadas a tu fase del ciclo actual."
  },
  {
    icon: <GroupsIcon fontSize="large" sx={{ color: "#7B2CBF" }} />,
    title: "Comunidad de Apoyo",
    desc: "Únete a nuestro foro seguro para compartir experiencias, hacer preguntas y conectar con otras usuarias."
  },
  {
    icon: <BookIcon fontSize="large" sx={{ color: "#7B2CBF" }} />,
    title: "Recursos Educativos",
    desc: "Accede a artículos y guías creados por expertos en salud femenina para resolver todas tus dudas."
  }
];

export default function FeaturesSection() {
  return (
    <Box px={{ xs: 3, lg: 5 }} py={{ xs: 8, md: 12 }} bgcolor="background.paper">
      {/* Encabezado */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#333" }} gutterBottom>
          Funcionalidades diseñadas para ti
        </Typography>
        <Typography color="text.secondary" maxWidth="600px" mx="auto">
          Te ofrecemos herramientas inteligentes y contenido de confianza para acompañarte en cada fase de tu ciclo.
        </Typography>
      </Box>

      {/* Grid de Features */}
      <Grid container spacing={3} justifyContent="center">
        {features.map((f, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Box
              borderRadius={2}
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1.5}
              bgcolor="background.default"
              boxShadow="0px 2px 8px rgba(0,0,0,0.08)"
              maxWidth={280}
              mx="auto"
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.12)"
                }
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#F3E8FF"
                borderRadius="50%"
                width={56}
                height={56}
              >
                {f.icon}
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                {f.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" textAlign="center">
                {f.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}