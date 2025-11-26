import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function ModerationList() {
  const reports = [
    { text: "¿Es normal tener cólicos una semana antes?", user: "usuaria_23", reason: "Spam" },
    { text: "Mi experiencia con el nuevo suplemento X...", user: "ana_perez", reason: "Desinformación" },
    { text: "Vendo productos para el cuidado íntimo", user: "laura_g", reason: "Contenido comercial" }
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Moderación de Contenido</Typography>

      {reports.map((r, i) => (
        <Box key={i} py={2} borderBottom="1px solid #eee">
          <Typography fontWeight="bold">{r.text}</Typography>
          <Typography variant="body2" color="gray">
            Reportado por <strong>{r.user}</strong> por '{r.reason}'.
          </Typography>

          <Box mt={1} display="flex" gap={1}>
            <Button size="small" color="success">Aprobar</Button>
            <Button size="small" color="error">Eliminar</Button>
          </Box>
        </Box>
      ))}
    </Card>
  );
}