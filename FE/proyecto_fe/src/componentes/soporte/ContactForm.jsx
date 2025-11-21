import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6B4D6",
        mt: 4,
      }}
    >
      <Typography fontSize="20px" fontWeight="bold" color="#4A454E">
        Envíanos tu consulta
      </Typography>

      <Typography fontSize="14px" color="#8D8395" mb={3}>
        Completa el formulario y nuestro equipo te contactará pronto.
      </Typography>

      <Box
        component="form"
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { md: "1fr 1fr" },
        }}
      >
        <TextField
          label="Nombre"
          placeholder="Tu nombre completo"
          fullWidth
        />

        <TextField
          label="Correo Electrónico"
          placeholder="tu@email.com"
          fullWidth
        />

        <TextField
          label="Categoría del problema"
          select
          fullWidth
          sx={{ gridColumn: { xs: "1", md: "span 2" } }}
        >
          <MenuItem>Pregunta general</MenuItem>
          <MenuItem>Problema técnico</MenuItem>
          <MenuItem>Sugerencia</MenuItem>
          <MenuItem>Consulta de suscripción</MenuItem>
        </TextField>

        <TextField
          label="Mensaje"
          multiline
          rows={5}
          placeholder="Describe tu consulta aquí..."
          sx={{ gridColumn: "span 2" }}
        />

        <Box sx={{ gridColumn: "span 2" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C8A2C8",
              ":hover": { backgroundColor: "#b18ab3" },
              px: 4,
              py: 1.5,
              fontWeight: "bold",
            }}
            endIcon={<SendIcon />}
          >
            Enviar Mensaje
          </Button>

          <Typography fontSize="12px" color="#8D8395" mt={1}>
            Nuestro equipo responderá en 24-48 horas hábiles.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}