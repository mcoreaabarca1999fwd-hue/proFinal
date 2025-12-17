import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import "../../estilos/cycle.css";
import ModalCiclo from "./RegistroCiclo";
import axios from "axios";

export default function CalendarCycle({ usuarioId }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [abrirModal, setAbrirModal] = useState(false);
  const [ciclos, setCiclos] = useState([]);

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("es-ES", { month: "long" });

  /* =========================
     TRAER CICLOS DEL USUARIO
     ========================= */
  useEffect(() => {
    axios
      .get(`http://localhost:8000/ciclos/ciclo-usuario/${localStorage.getItem("idUsuario")}/`)
      .then((res) => setCiclos(res.data))
      .catch((err) => console.error(err));
  }, [localStorage.getItem("idUsuario")]);

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = Array(42)
    .fill(null)
    .map((_, i) => {
      const day = i - firstDayOfMonth + 1;
      return day > 0 && day <= daysInMonth ? day : "";
    });

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1));

  const isDayInCycle = (day) => {
    if (!day) return false;

    const dateToCheck = new Date(year, month, day);

    return ciclos.some((ciclo) => {
      const inicio = new Date(ciclo.fecha_inicio);
      const fin = new Date(ciclo.fecha_fin);
      return dateToCheck >= inicio && dateToCheck <= fin;
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        p: 4,
        borderRadius: 3,
        border: "1px solid #e5e5e5",
      }}
    >
      {/* HEADER */}
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

      {/* DAYS OF WEEK */}
      <Box display="grid" gridTemplateColumns="repeat(7,1fr)" textAlign="center" mb={1}>
        {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"].map((d) => (
          <Typography key={d} sx={{ color: "var(--medium-gray)" }}>
            {d}
          </Typography>
        ))}
      </Box>

      {/* CALENDAR GRID */}
      <Box display="grid" gridTemplateColumns="repeat(7,1fr)" gap={1}>
        {calendarDays.map((day, i) => {
          const isToday =
            day &&
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          const inCycle = isDayInCycle(day);

          return (
            <div
              key={i}
              className="day-cell"
              style={{
                background: inCycle ? "var(--soft-blush)" : "transparent",
                borderRadius: isToday ? "50%" : "8px",
                opacity: day ? 1 : 0.15,
                outline: isToday ? "2px solid var(--muted-teal)" : "none",
                fontWeight: isToday ? "bold" : "normal",
              }}
            >
              {day}
            </div>
          );
        })}
      </Box>

      {/* LEGEND */}
      <Box mt={3} display="flex" flexWrap="wrap" gap={4}>
        <Legend color="var(--soft-blush)" label="Período" />
      </Box>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#8a3dda", mt: 3 }}
        onClick={() => setAbrirModal(true)}
      >
        Añadir Período
      </Button>

      {abrirModal && (
        <ModalCiclo open={abrirModal} onClose={() => setAbrirModal(false)} />
      )}
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
