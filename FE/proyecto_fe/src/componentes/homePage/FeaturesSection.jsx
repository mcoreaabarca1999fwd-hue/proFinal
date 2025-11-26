import { Box, Typography, Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import BookIcon from "@mui/icons-material/Book";

const features = [
  {
    icon: <CalendarMonthIcon fontSize="large" color="primary" />,
    title: "Seguimiento Inteligente",
    desc: "Registra tus síntomas y predice tus próximas menstruaciones y periodos de ovulación con precisión."
  },
  {
    icon: <FavoriteIcon fontSize="large" color="primary" />,
    title: "Consejos Personalizados",
    desc: "Recibe recomendaciones de nutrición, ejercicio y bienestar adaptadas a tu fase del ciclo actual."
  },
  {
    icon: <GroupsIcon fontSize="large" color="primary" />,
    title: "Comunidad de Apoyo",
    desc: "Únete a nuestro foro seguro para compartir experiencias, hacer preguntas y conectar con otras usuarias."
  },
  {
    icon: <BookIcon fontSize="large" color="primary" />,
    title: "Recursos Educativos",
    desc: "Accede a artículos y guías creados por expertos en salud femenina para resolver todas tus dudas."
  }
];

export default function FeaturesSection() {
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }} bgcolor="background.paper">
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold">Funcionalidades diseñadas para ti</Typography>
        <Typography color="text.secondary">Te ofrecemos herramientas inteligentes y contenido de confianza para acompañarte en cada fase de tu ciclo.</Typography>
      </Box>
      <Grid container spacing={4}>
        {features.map((f, idx) => (
          <Grid item xs={12} sm={6} lg={3} key={idx}>
            <Box borderRadius={2} border="1px solid rgba(0,0,0,0.1)" p={3} display="flex" flexDirection="column" gap={1} bgcolor="background.default">
              {f.icon}
              <Typography fontWeight="bold">{f.title}</Typography>
              <Typography color="text.secondary" variant="body2">{f.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}