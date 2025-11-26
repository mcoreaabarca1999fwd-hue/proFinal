import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ color: "text.primary" }}
      >
        Gestión de Usuarios
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        Administra, edita y controla los usuarios dentro de la plataforma.
      </Typography>
    </Box>
  );
}