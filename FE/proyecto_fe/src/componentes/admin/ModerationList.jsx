import { Card, Typography, Box, Button, Paper } from "@mui/material";

export default function ModerationList() {
  const reports = [
    { text: "¿Es normal tener cólicos una semana antes?", user: "usuaria_23", reason: "Spam" },
    { text: "Mi experiencia con el nuevo suplemento X...", user: "ana_perez", reason: "Desinformación" },
    { text: "Vendo productos para el cuidado íntimo", user: "laura_g", reason: "Contenido comercial" }
  ];

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
        sx={{ color: "var(--primary-dark)" }}
      >
        Moderación de Contenido
      </Typography>

      {reports.map((r, i) => (
        <Paper
          key={i}
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              bgcolor: "#fafafa",
            },
          }}
        >
          <Typography fontWeight="bold" sx={{ color: "#181115", mb: 0.5 }}>
            {r.text}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Reportado por <strong>{r.user}</strong> por <em>{r.reason}</em>.
          </Typography>

          <Box display="flex" gap={1}>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 2,
                "&:hover": { bgcolor: "#2e7d32" },
              }}
            >
              Aprobar
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 2,
                "&:hover": { bgcolor: "#c62828" },
              }}
            >
              Eliminar
            </Button>
          </Box>
        </Paper>
      ))}
    </Card>
  );
}