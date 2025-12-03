import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { postData } from "../../servicios/fetch";

// Formato para título
function formatDateTitle(date) {
  return date.toLocaleString("es-ES", {
    month: "long",
    year: "numeric",
  });
}

// Texto bonito para inputs si quieres cambiarlo luego
function formatPretty(date) {
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// 👉 NUEVO — formateo para mostrar en YYYY-MM-DD
function formatYYYYMMDD(date) {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function ModalCiclo({ open, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = Array(42)
    .fill(null)
    .map((_, i) => {
      const day = i - (firstDayOfMonth - 1) + 1;
      return day > 0 && day <= daysInMonth ? day : "";
    });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const selectDay = (day) => {
    if (!day) return;

    const clicked = new Date(year, month, day);

    // --- VALIDACIÓN NUEVA: FIN NO PUEDE SER > 2 MESES DESPUÉS DE INICIO ---
    if (startDate && !endDate) {
      const maxEnd = new Date(startDate);
      maxEnd.setMonth(maxEnd.getMonth() + 2);

      if (clicked > maxEnd) {
        return; // Bloquea selección inválida
      }
    }
    // ---------------------------------------------------------------------

    if (!startDate) {
      setStartDate(clicked);
      setEndDate(null);
      return;
    }

    if (!endDate) {
      if (clicked < startDate) {
        setEndDate(startDate);
        setStartDate(clicked);
      } else {
        setEndDate(clicked);
      }
      return;
    }

    setStartDate(clicked);
    setEndDate(null);
  };

  const isInRange = (day) => {
    if (!day || !startDate || !endDate) return false;
    const d = new Date(year, month, day);
    return d >= startDate && d <= endDate;
  };

  const isStart = (day) =>
    startDate &&
    day &&
    startDate.getDate() === day &&
    startDate.getMonth() === month &&
    startDate.getFullYear() === year;

  const isEnd = (day) =>
    endDate &&
    day &&
    endDate.getDate() === day &&
    endDate.getMonth() === month &&
    endDate.getFullYear() === year;

  async function guardarCiclo() {
    const cicloData = {
      fecha_inicio: formatYYYYMMDD(startDate),
      fecha_fin: formatYYYYMMDD(endDate),
      sintomas: "ya me bajo, xd",
      usuario: localStorage.getItem("idUsuario"),
      duracion_menstruacion:
        Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1,
      duracion_promedio: 28,
    };

    await postData("ciclos/ciclo/", cicloData);
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* PANEL IZQUIERDO — CALENDARIO */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            borderRight: { md: "1px solid #ddd" },
          }}
        >
          {/* HEADER: mes + navegación */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <IconButton onClick={prevMonth}>
              <ChevronLeftIcon />
            </IconButton>

            <Typography fontWeight="bold" sx={{ textTransform: "capitalize" }}>
              {formatDateTitle(currentDate)}
            </Typography>

            <IconButton onClick={nextMonth}>
              <ChevronRightIcon />
            </IconButton>
          </Box>

          {/* DÍAS DE LA SEMANA */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 0.5,
            }}
          >
            {["L", "M", "M", "J", "V", "S", "D"].map((d) => (
              <Typography
                key={d}
                align="center"
                sx={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#636388",
                }}
              >
                {d}
              </Typography>
            ))}

            {/* CUADRÍCULA DE DÍAS */}
            {calendarDays.map((day, i) => {
              const selected = isStart(day) || isEnd(day);
              const inRange = isInRange(day);

              return (
                <Box
                  key={i}
                  onClick={() => selectDay(day)}
                  sx={{
                    height: 46,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: day ? "pointer" : "default",
                    bgcolor: selected
                      ? "#f48fb1"
                      : inRange
                      ? "#f9c2d9"
                      : "transparent",
                    borderRadius: selected ? "50%" : "8px",
                    opacity: day ? 1 : 0.15,
                    fontWeight: selected ? "bold" : "normal",
                    transition: "0.2s",
                    "&:hover": {
                      bgcolor: day ? "#ffddea" : "transparent",
                    },
                  }}
                >
                  {day}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* PANEL DERECHO */}
        <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Editar Fechas del Ciclo
            </Typography>

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography sx={{ color: "#636388", mb: 3 }}>
            Selecciona las fechas de inicio y fin en el calendario.
          </Typography>

          {/* CAMPOS */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <Typography fontSize={14} fontWeight={600} mb={1}>
                Inicio de la Menstruación
              </Typography>
              <TextField
                fullWidth
                value={startDate ? formatYYYYMMDD(startDate) : ""}
                placeholder="YYYY-MM-DD"
                InputProps={{ readOnly: true }}
              />
            </Box>

            <Box>
              <Typography fontSize={14} fontWeight={600} mb={1}>
                Fin de la Menstruación
              </Typography>
              <TextField
                fullWidth
                value={endDate ? formatYYYYMMDD(endDate) : ""}
                placeholder="YYYY-MM-DD"
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Box>

          {/* BOTONES */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >
            <Button variant="outlined" onClick={onClose}>
              Cancelar
            </Button>

            <Button
              variant="contained"
              disabled={!startDate || !endDate}
              sx={{
                bgcolor: "#9947eb",
                "&:disabled": { opacity: 0.4 },
              }}
              onClick={guardarCiclo}
            >
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
