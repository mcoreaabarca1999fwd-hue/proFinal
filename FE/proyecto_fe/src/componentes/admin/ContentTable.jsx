import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Box, Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ContentTable() {
  const rows = [
    { title: "Guía completa sobre el ciclo menstrual", cat: "Ciclo Menstrual", type: "Artículo", state: "Publicado", color: "success" },
    { title: "Yoga para aliviar cólicos (Video)", cat: "Bienestar", type: "Video", state: "Publicado", color: "success" },
    { title: "Entendiendo el SOP", cat: "Salud", type: "Guía", state: "Borrador", color: "warning" },
  ];

  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Gestión de Contenidos Educativos</Typography>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: "#c319e6" }}>
          Añadir Nuevo Contenido
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Categoría</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.title}</TableCell>
              <TableCell>{r.cat}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>
                <Typography sx={{
                  display: "inline-block",
                  px: 1,
                  py: 0.5,
                  bgcolor: `${r.color}.light`,
                  borderRadius: 2,
                  color: `${r.color}.dark`,
                  fontSize: 12
                }}>
                  {r.state}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Button size="small">Editar</Button>
                <Button size="small" color="error">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </Paper>
  );
}