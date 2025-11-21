import { Box, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const options = [
  {
    icon: <QuizIcon sx={{ fontSize: 36 }} />,
    title: "Preguntas Frecuentes",
    desc: "Encuentra respuestas a las dudas más comunes.",
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 36 }} />,
    title: "Recursos y Artículos",
    desc: "Explora nuestra biblioteca de contenido educativo.",
  },
  {
    icon: <MailIcon sx={{ fontSize: 36 }} />,
    title: "Contacta con Nosotros",
    desc: "Envíanos un mensaje y te ayudaremos.",
  },
];

export default function HelpOptions() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
        p: 2,
      }}
    >
      {options.map((opt, i) => (
        <Box
          key={i}
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E6B4D6",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#E6B4D650",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 12px",
              color: "#C8A2C8",
            }}
          >
            {opt.icon}
          </Box>

          <Typography fontWeight="bold" color="#4A454E">
            {opt.title}
          </Typography>

          <Typography fontSize="14px" color="#8D8395" mt={1}>
            {opt.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}