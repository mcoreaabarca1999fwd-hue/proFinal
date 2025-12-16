import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Main() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, maxWidth: 960, mx: "auto", py: 4 }}>
      
      {/* Title */}
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: 900, color: "#4A2251" }}>
          Preguntas Frecuentes
        </Typography>

        <Typography sx={{ color: "#A18DA4" }}>
          ¿Necesitas Ayuda? Encuentra respuestas a las dudas más comunes.
        </Typography>
      </Box>

      {/* Search */}
      <Box sx={{ my: 3 }}>
        <TextField
          fullWidth
          placeholder="Encuentra respuestas rápidas..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#A18DA4" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Chips */}
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
        <Chip label="General" sx={{ backgroundColor: "#D69FDB", color: "white" }} />
        <Chip label="Uso de la Aplicación" />
        <Chip label="Ciclo Menstrual y Salud" />
        <Chip label="Cuenta y Suscripción" />
        <Chip label="Privacidad y Datos" />
      </Box>

      {/* FAQs */}
      <Box sx={{ mt: 4 }}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo registro mi estado de ánimo?
          </AccordionSummary>
          <AccordionDetails>
            Para registrar tu estado de ánimo, ve a tu calendario y ...
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Es normal que mi ciclo varíe en duración?
          </AccordionSummary>
          <AccordionDetails>
            Sí, es completamente normal. La duración del ciclo menstrual...
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Cómo puedo cambiar mi contraseña?
          </AccordionSummary>
          <AccordionDetails>
            Puedes cambiar tu contraseña desde la sección 'Ajustes'...
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            ¿Mis datos están seguros en la aplicación?
          </AccordionSummary>
          <AccordionDetails>
            Absolutamente. La seguridad y privacidad de tus datos...
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Bottom Card */}
      <Box
        sx={{
          mt: 8,
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <SupportAgentIcon sx={{ color: "#D69FDB", fontSize: 40 }} />

        <Typography sx={{ fontWeight: "bold", mt: 1, color: "#4A2251" }}>
          ¿No encuentras lo que buscas?
        </Typography>

        <Typography sx={{ color: "#A18DA4", maxWidth: 350, mx: "auto", mt: 1 }}>
          Nuestro equipo de soporte está aquí para ayudarte.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D69FDB",
            mt: 2,
            fontWeight: "bold",
          }}
        >
          Contacta con Nosotras
        </Button>
      </Box>
    </Box>
  );
}