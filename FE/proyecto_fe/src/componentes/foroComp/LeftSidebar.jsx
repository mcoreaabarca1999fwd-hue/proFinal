import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useState } from "react";
import CrearPublicacionModal from "./CrearPublicacionModal";
import { useNavigate } from "react-router-dom";
export default function LeftSidebar() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Crear publicación */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#eb477e",
            "&:hover": { bgcolor: "#d33c70" },
            height: 48,
            borderRadius: 2,
            fontWeight: "700",
          }}
          startIcon={<EditIcon />}
          onClick={() => {
            if (localStorage.getItem('token')) {
              setMostrarModal(true)
              return
            }else{
              navigate('/login')
            }
            
          }}
        >
          {localStorage.getItem('token')? 'Crear Publicación' : 'Inicia sesión para crear publicación'}
        </Button>
          {mostrarModal && (
            <CrearPublicacionModal open={mostrarModal} onClose={()=>setMostrarModal(false)}/>
          )}
        {/* Navegación */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Item icon={<ScheduleIcon />} label="Recientes" active />
          <Item icon={<WhatshotIcon />} label="Populares" />
          <Item icon={<FavoriteIcon />} label="Mis Seguidos" />
        </Box>
      </Box>

      {/* Categorías */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography fontSize={16} fontWeight={700} mb={2} px={1}>
          Etiquetas
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Category label="Salud Menstrual" />
          <Category label="Fertilidad" />
          <Category label="Bienestar" />
          <Category label="Consejos" />
          <Category label="Embarazo" />
        </Box>
      </Box>
    </Box>
  );
}

function Item({ icon, label, active }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        px: 2,
        py: 1,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: active ? "#E6E0F8" : "transparent",
        "&:hover": { bgcolor: "#f3f3f3" },
      }}
    >
      {icon}
      <Typography fontSize={14}>{label}</Typography>
    </Box>
  );
}

function Category({ label }) {
  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        "&:hover": { bgcolor: "#f3f3f3" },
      }}
    >
      <Typography fontSize={14}>{label}</Typography>
    </Box>
  );
}