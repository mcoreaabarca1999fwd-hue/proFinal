import { Box, Button, Typography, Divider } from "@mui/material";
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
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#9946ec",
            "&:hover": { bgcolor: "#7B2CBF" },
            height: 48,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: "none",
            transition: "all 0.3s ease",
          }}
          startIcon={<EditIcon />}
          onClick={() => {
            if (localStorage.getItem("token")) {
              setMostrarModal(true);
              return;
            } else {
              navigate("/login");
            }
          }}
        >
          {localStorage.getItem("token")
            ? "Crear Publicación"
            : "Inicia sesión para crear publicación"}
        </Button>

        {mostrarModal && (
          <CrearPublicacionModal
            open={mostrarModal}
            onClose={() => setMostrarModal(false)}
          />
        )}

        <Divider sx={{ my: 1 }} />

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
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
        <Typography fontSize={16} fontWeight={700} mb={2} px={1} color="#333">
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
        transition: "background-color 0.3s ease",
        "&:hover": { bgcolor: "#f3f3f3" },
      }}
    >
      {icon}
      <Typography fontSize={14} color={active ? "#6A1B9A" : "#444"}>
        {label}
      </Typography>
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
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": { bgcolor: "#f3f3f3" },
      }}
    >
      <Typography fontSize={14} color="#444">
        {label}
      </Typography>
    </Box>
  );
}
