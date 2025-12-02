import {
  Box,
  Card,
  Typography,
  Button,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import SpaIcon from "@mui/icons-material/Spa";
import { useEffect,useState } from "react";
import { getData } from "../servicios/fetch";
import { useNavigate } from "react-router-dom";
export default function Bienvenidx() {
  const [usuario,setUsuario]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    async function traerNombre() {
        const usuario = await getData(`usuarios/usuario/${localStorage.getItem('idUsuario')}/`)
        setUsuario(usuario[0])
    } 
    traerNombre()
  },[])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#f8f6f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 480,        // Igual al original
          borderRadius: "1rem", // rounded-xl
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          bgcolor: "white",
          p: { xs: 3, sm: 4 },
        }}
      >
        {/* Imagen */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 320,
              aspectRatio: "1 / 1",
              borderRadius: "1rem",
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVasblcg2OOrQEtQ3sWNgh_jVrnck53vNMet5VqVL4xLWRrABkucnhnMfAfywGaZ8yCb9MxhbeOWZg70uFhZhn_xL-BSu_hOOOe-vs3NUIVeQ9BJDbmwUMM2cfvFAmhucR-Z47-XRuLdM6lFDr_W8qTXboOnQ7tYBNuef2IeQ2jsrL_YEKnV4y5aG9o3TMZCUCWcNvm5DOR5_3Sc3Z3ecBu-64MirXn8tRXqgdTnqvkj8d2rwUjxiDJ7MymFCVG9ArLwTuD9LmsQ5a")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        {/* Título */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.9rem",
            mt: 4,
            mb: 1,
            color: "#121212",
          }}
        >
          ¡Hola de nuevo, {usuario.first_name}!
        </Typography>

        {/* Descripción */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#555",
            fontSize: "1rem",
            px: 2,
            mb: 2,
          }}
        >
          Estamos aquí para ayudarte a entender tu cuerpo y cuidar de tu
          bienestar. Registra tu ciclo, entiende tus síntomas y recibe
          consejos personalizados.
        </Typography>

        {/* Íconos - EXACTAMENTE igual */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 2,
            mt: 3,
            px: 2,
          }}
        >
          {/* Seguimiento */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "0.75rem",
              p: 2,
              textAlign: "center",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CalendarMonthIcon sx={{ fontSize: 34, color: "#222" }} />
            <Typography fontWeight={600}>Seguimiento</Typography>
          </Box>

          {/* Análisis */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "0.75rem",
              p: 2,
              textAlign: "center",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <BarChartIcon sx={{ fontSize: 34, color: "#222" }} />
            <Typography fontWeight={600}>Análisis</Typography>
          </Box>

          {/* Bienestar */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "0.75rem",
              p: 2,
              textAlign: "center",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SpaIcon sx={{ fontSize: 34, color: "#222" }} />
            <Typography fontWeight={600}>Bienestar</Typography>
          </Box>
        </Box>

        {/* Botón */}
        <Button
          fullWidth
          sx={{
            mt: 4,
            height: 48,
            borderRadius: "1rem",
            bgcolor: "#eb47b4",
            color: "white",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#d83fa3" },
          }}
          onClick={()=>{
            navigate('/perfil')
          }}
        >
          Comenzar
        </Button>
      </Card>
    </Box>
  );
}
