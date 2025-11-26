import { Box, Button, TextField, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DownloadIcon from "@mui/icons-material/Download";

export default function ReportControls() {
  return (
    <Box display="flex" gap={2} mb={4} flexWrap="wrap">
      <TextField select label="Tipo de Reporte" size="small" sx={{ minWidth: 200 }}>
        <MenuItem>Actividad de Usuarios</MenuItem>
        <MenuItem>Rendimiento del Foro</MenuItem>
        <MenuItem>Consumo de Contenido</MenuItem>
        <MenuItem>Tendencias del Ciclo</MenuItem>
      </TextField>
      <TextField type="date" size="small" label="Fecha inicio" InputLabelProps={{ shrink: true }} />
      <TextField type="date" size="small" label="Fecha fin" InputLabelProps={{ shrink: true }} />
      <Button variant="contained" startIcon={<FilterAltIcon />}>Generar Reporte</Button>
      <Button variant="outlined" startIcon={<DownloadIcon />}></Button>
    </Box>
  );
}