import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Box, Typography, Chip, IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ContentTable() {
  const rows = [
    { title: "Guía completa sobre el ciclo menstrual", cat: "Ciclo Menstrual", type: "Artículo", state: "Publicado", color: "success" },
    { title: "Yoga para aliviar cólicos (Video)", cat: "Bienestar", type: "Video", state: "Publicado", color: "success" },
    { title: "Entendiendo el SOP", cat: "Salud", type: "Guía", state: "Borrador", color: "warning" },
  ];

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#181115" }}>
          Gestión de Contenidos Educativos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "#9947eb",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 2,
            "&:hover": { bgcolor: "#7B2CBF" }
          }}
        >
          Añadir Nuevo Contenido
        </Button>
      </Box>

      {/* Tabla */}
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f9f5ff" }}>
              <TableCell sx={{ fontWeight: 700 }}>Título</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Categoría</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Tipo</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((r, i) => (
              <TableRow
                key={i}
                sx={{
                  "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                  "&:hover": { bgcolor: "#f3e8ff" }
                }}
              >
                <TableCell>{r.title}</TableCell>
                <TableCell>{r.cat}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>
                  <Chip
                    label={r.state}
                    color={r.color}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" sx={{ color: "#9947eb" }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#9947eb" }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}