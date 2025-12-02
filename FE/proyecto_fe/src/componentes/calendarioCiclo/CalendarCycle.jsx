import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import "../../estilos/cycle.css";

export default function CalendarCycle() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11)); 

  const today = new Date(); // día real HOY
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("es-ES", { month: "long" });

  // Día en que inicia el mes
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // Cantidad de días del mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Array de días para rellenar el calendario
  const calendarDays = Array(42).fill(null).map((_, i) => {
    const day = i - firstDayOfMonth + 1;
    return day > 0 && day <= daysInMonth ? day : "";
  });

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1));

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 4,
        borderRadius: 3,
        border: "1px solid #e5e5e5",
      }}
    >
      {/* TÍTULO Y CONTROLES */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Calendario del Ciclo
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={handlePrevMonth}>
            <ChevronLeft />
          </IconButton>

          <Typography sx={{ textTransform: "capitalize" }}>
            {monthName} {year}
          </Typography>

          <IconButton onClick={handleNextMonth}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      {/* DÍAS DE LA SEMANA */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(7,1fr)"
        textAlign="center"
        mb={1}
      >
        {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"].map((d) => (
          <Typography key={d} sx={{ color: "var(--medium-gray)" }}>
            {d}
          </Typography>
        ))}
      </Box>

      {/* CALENDARIO */}
      <Box display="grid" gridTemplateColumns="repeat(7,1fr)" gap={1}>
        {calendarDays.map((day, i) => {
          const isToday =
            day &&
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          // Tus colores originales
          const bg =
            i === 16
              ? "var(--muted-teal)"
              : i >= 11 && i <= 13
              ? "var(--sky-blue)"
              : i >= 8 && i <= 10
              ? "var(--soft-blush)"
              : "transparent";

          const radius =
            i === 16 || (i >= 8 && i <= 10) ? "12px" : "8px";

          return (
            <div
              key={i}
              className="day-cell"
              style={{
                background: bg,
                borderRadius: radius,
                color: i === 16 ? "white" : "inherit",
                opacity: day ? 1 : 0.15,

                // ⭐ NUEVO → Estilo del día actual
                outline: isToday ? "2px solid var(--muted-teal)" : "none",
                fontWeight: isToday ? "bold" : "normal",
                borderRadius: isToday ? "50%" : radius,
              }}
            >
              {day}
            </div>
          );
        })}
      </Box>

      {/* LEYENDA */}
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
      <Box
        sx={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
      <Typography>{label}</Typography>
    </Box>
  );
}
