import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import '../../estilos/cycle.css';
export default function CalendarCycle() {
  return (
    <Box sx={{
      bgcolor: "white",
      p: 4,
      borderRadius: 3,
      border: "1px solid #e5e5e5",
    }}>
      
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h6" fontWeight="bold">Calendario del Ciclo</Typography>
        
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton><ChevronLeft /></IconButton>
          <Typography>Junio 2024</Typography>
          <IconButton><ChevronRight /></IconButton>
        </Box>
      </Box>

      {/* Días de la semana */}
      <Box display="grid" gridTemplateColumns="repeat(7,1fr)" textAlign="center" mb={1}>
        {["Do","Lu","Ma","Mi","Ju","Vi","Sá"].map(d => (
          <Typography key={d} sx={{ color: "var(--medium-gray)" }}>{d}</Typography>
        ))}
      </Box>

      {/* Celdas del calendario */}
      <Box display="grid" gridTemplateColumns="repeat(7,1fr)" gap={1}>
        {/* Puedes mapear esto dinámicamente si deseas */}
        {[...Array(42)].map((_, i) => (
          <div key={i} className="day-cell" style={{
            background:
              i === 16 ? "var(--muted-teal)" :
              i >= 11 && i <= 13 ? "var(--sky-blue)" :
              i >= 8 && i <= 10 ? "var(--soft-blush)" :
              "transparent",
            borderRadius: (i === 16 || i >= 8 && i <= 10) ? "12px" : "8px",
            color: i === 16 ? "white" : "inherit"
          }}>
            {i+1}
          </div>
        ))}
      </Box>

      {/* Leyenda */}
      <Box mt={3} display="flex" flexWrap="wrap" gap={4}>
        <Legend color="var(--soft-blush)" label="Período" />
        <Legend color="var(--sky-blue)" label="Ventana fértil" />
        <Legend color="var(--muted-teal)" label="Ovulación" />
      </Box>

    </Box>
  );
}

function Legend({ color, label }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box sx={{
        width: 14, height: 14, borderRadius: "50%",
        backgroundColor: color
      }} />
      <Typography>{label}</Typography>
    </Box>
  );
}
