import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function StatsReport() {
  return (
    <Box sx={{
      width: "125%",
      bgcolor: "white",
      p: 4,
      borderRadius: 3,
      border: "1px solid #e5e5e5"
    }}>
      
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h6" fontWeight="bold">Estadísticas y Reportes del Ciclo</Typography>
        
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{ bgcolor: "var(--primary-dark)" }}
        >
          Generar Reporte
        </Button>
      </Box>

      {/* Tarjetas */}
      <Box display="grid" gridTemplateColumns="repeat(auto-fill,minmax(200px,1fr))" gap={3}>
        
        <StatCard title="Duración promedio del ciclo" value="28 días" />
        <StatCard title="Duración promedio del período" value="5 días" />
        <StatCard title="Regularidad del ciclo" value="Alta" />

      </Box>

      <Box mt={4}>
        <Typography fontWeight="bold" mb={2}>Frecuencia de Síntomas</Typography>

        <ProgressItem label="Cólicos" value={75} />
        <ProgressItem label="Dolor de cabeza" value={50} />
        <ProgressItem label="Irritabilidad" value={60} />

      </Box>

    </Box>
  );
}

function StatCard({ title, value }) {
  return (
    <Box sx={{
      bgcolor: "var(--background-light)",
      p: 2,
      borderRadius: 3
    }}>
      <Typography color="var(--medium-gray)">{title}</Typography>
      <Typography variant="h5" fontWeight="bold">{value}</Typography>
    </Box>
  );
}

function ProgressItem({ label, value }) {
  return (
    <Box mb={2}>
      <Box display="flex" justifyContent="space-between" mb={0.5}>
        <Typography>{label}</Typography>
        <Typography>{value}%</Typography>
      </Box>
      <Box sx={{ background: "var(--soft-blush)", height: 10, borderRadius: 5 }}>
        <Box sx={{
          background: "var(--primary-dark)",
          width: `${value}%`,
          height: "100%",
          borderRadius: 5
        }}/>
      </Box>
    </Box>
  );
}
