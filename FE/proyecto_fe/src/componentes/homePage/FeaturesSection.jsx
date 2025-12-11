import { Box, Typography, Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import BookIcon from "@mui/icons-material/Book";
import { keyframes } from "@mui/system";

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

// Animaciones
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function FeaturesSection() {
  return (
    <Box px={{ xs: 3, lg: 5 }} py={{ xs: 8, md: 12 }} bgcolor="background.paper">
      {/* Encabezado */}
      <Box textAlign="center" mb={6} sx={{ animation: `${fadeUp} 0.8s ease forwards` }}>
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
              p={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1.5}
              bgcolor="background.default"
              boxShadow="0px 2px 8px rgba(0,0,0,0.08)"
              maxWidth={280}
              mx="auto"
              sx={{
                animation: `${fadeUp} 0.8s ease forwards`,
                animationDelay: `${idx * 0.2}s`,
                opacity: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)"
                }
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#F3E8FF"
                borderRadius="50%"
                width={64}
                height={64}
                sx={{
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "rotate(10deg) scale(1.1)" }
                }}
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