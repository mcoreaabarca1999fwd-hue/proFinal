import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import HelpOptions from "./HelpOptions";
import ContactForm from "./ContactForm";

export default function SupportContent() {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", width: "100%", mt: 4 }}>
      <Typography
        fontSize="34px"
        fontWeight="900"
        textAlign="center"
        color="#4A454E"
      >
        Centro de Soporte
      </Typography>

      <Typography
        textAlign="center"
        fontSize="16px"
        color="#8D8395"
        mt={1}
      >
        Estamos aquí para ayudarte. Encuentra respuestas a tus preguntas o contáctanos directamente.
      </Typography>

      <SearchBar />

      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#4A454E"
        mt={4}
        px={2}
      >
        Opciones de Ayuda
      </Typography>

      <HelpOptions />

      <ContactForm />
    </Box>
  );
}