import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DownloadIcon from "@mui/icons-material/Download";

export default function Filters() {
  return (
    <Box
      sx={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        p: 3,
        mb: 4
      }}
    >
      <Grid container spacing={3} alignItems="flex-end">
        
        {/* Tipo de Reporte */}
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Tipo de Reporte</InputLabel>
            <Select label="Tipo de Reporte" defaultValue="Actividad de Usuarios">
              <MenuItem value="Actividad de Usuarios">Actividad de Usuarios</MenuItem>
              <MenuItem value="Rendimiento del Foro">Rendimiento del Foro</MenuItem>
              <MenuItem value="Consumo de Contenido">Consumo de Contenido</MenuItem>
              <MenuItem value="Tendencias del Ciclo">Tendencias del Ciclo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Fecha inicio */}
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            fullWidth
            size="small"
            label="Fecha inicio"
            type="date"
            defaultValue="2023-10-01"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Fecha fin */}
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            fullWidth
            size="small"
            label="Fecha fin"
            type="date"
            defaultValue="2023-10-31"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Botones */}
        <Grid item xs={12} md={6} lg={3} display="flex" gap={1}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FilterAltIcon />}
            sx={{ textTransform: "none", background: "#c319e6" }}
          >
            Generar Reporte
          </Button>

          <IconButton
            sx={{
              border: "1px solid #d1d1d1",
              borderRadius: "8px"
            }}
          >
            <DownloadIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}