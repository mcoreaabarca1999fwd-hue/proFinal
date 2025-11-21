import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  IconButton,
  InputAdornment,
  Divider
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { postData } from "../servicios/fetch";
import {useNavigate} from 'react-router-dom';
export default function CycleHistoryForm() {
  const navigate = useNavigate();
  const [cycleDuration, setCycleDuration] = useState("");
  const [periodDuration, setPeriodDuration] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [periods, setPeriods] = useState([]);
 
  async function agregarCiclo() {
      const objCiclo = {
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
        usuario: localStorage.getItem('idUsuario'),
        duracion_menstruacion:periodDuration,
        duracion_promedio:cycleDuration,
        sintomas:"Me lele",
      }
      await postData("ciclos/ciclo/", objCiclo);
      navigate('/home');
      }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAF9F6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        backgroundImage:
          "radial-gradient(circle at top right, #E6E6FA 20%, transparent 50%), radial-gradient(circle at bottom left, #FFC0CB 20%, transparent 60%)",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 480 }}>
        
        {/* TÍTULO */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{ fontSize: "2.2rem", fontWeight: 800, color: "#333" }}
          >
            Cuéntanos sobre tu ciclo
          </Typography>
          <Typography sx={{ mt: 1, color: "rgba(0,0,0,0.6)" }}>
            Añade tu ultimo ciclo
          </Typography>
        </Box>

        {/* CARD PRINCIPAL */}
        <Card
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: 4,
          }}
        >
          {/* FORM */}
          <Box sx={{ display: "grid", gap: 3 }}>

            {/* DURACIÓN DEL CICLO */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              <Box>
                <Typography sx={{ mb: 1 }}>Duración promedio del ciclo</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Ej: 28"
                  value={cycleDuration}
                  onChange={(e) => setCycleDuration(e.target.value)}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">días</InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* DURACIÓN MENSTRUACIÓN */}
              <Box>
                <Typography sx={{ mb: 1 }}>Duración de la menstruación</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Ej: 5"
                  value={periodDuration}
                  onChange={(e) => setPeriodDuration(e.target.value)}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">días</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* LISTA DE PERIODOS */}
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Registra tu ultimo ciclo</Typography>
              <Typography sx={{ mt: 0.5, fontSize: "0.9rem", color: "gray" }}>
                Añade la fecha de tu último periodo.
              </Typography>

              <Box sx={{ mt: 2, display: "grid", gap: 2 }}>
                {/* PERIODOS YA AGREGADOS */}
                {periods.map((p, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      bgcolor: "rgba(230,230,250,0.3)",
                      borderRadius: 2,
                    }}
                  >
                  </Box>
                ))}

                {/* AÑADIR NUEVA FECHA */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <TextField
                    type="date"
                    fullWidth
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    sx={{ bgcolor: "white", borderRadius: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon sx={{ color: "gray" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    fullWidth
                    sx={{ bgcolor: "white", borderRadius: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon sx={{ color: "gray" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                </Box>
              </Box>
            </Box>

            {/* BOTONES FINALES */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Button
                onClick={()=>navigate('/bienvenidx')}
              sx={{ color: "gray" }}>Omitir por ahora</Button>

              <Button
                onClick={agregarCiclo}
                variant="contained"
                sx={{
                  bgcolor: "#D67C97",
                  px: 4,
                  height: 56,
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#c56c88" },
                }}
              >
                Continuar
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}