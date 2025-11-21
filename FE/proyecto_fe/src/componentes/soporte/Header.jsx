import { Box, Typography, IconButton, Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        py: 2,
        borderBottom: "1px solid #E6B4D6",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Logo + Nombre */}
      <Box display="flex" alignItems="center" gap={1.5}>
        <Box sx={{ width: 28, color: "#C8A2C8" }}>
          <svg fill="currentColor" viewBox="0 0 48 48">
            <path d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" />
          </svg>
        </Box>

        <Typography fontWeight="bold" fontSize="18px" color="#4A454E">
          AlmaFloral
        </Typography>
      </Box>

      {/* Navegación + Ajustes + Avatar */}
      <Box display="flex" alignItems="center" gap={3}>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 3,
            color: "#8D8395",
            fontSize: "14px",
          }}
        >
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#C8A2C8" } }}>
            Inicio
          </Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#C8A2C8" } }}>
            Calendario
          </Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#C8A2C8" } }}>
            Informes
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "#C8A2C8" }}>
            Soporte
          </Typography>
        </Box>

        <IconButton sx={{ backgroundColor: "#C8A2C820" }}>
          <SettingsIcon sx={{ color: "#4A454E" }} />
        </IconButton>

        <Avatar
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnC_-9HXFZ5ZUOewHsp81MEdQNpBlFyTJYyLCTysmP48k9miLBGLXPSXSgbs3UOQUykesFkJtTu7SQBnZjRUXVST1mnKcpflaIc5CzFBPLFau-TbJmRgmjcZ3-XER42xywigfESgYkBExyuWJ2Z0S9slJhRl5wRkc1kgfo_zIebW-xgACSBlLMJEh4IrvNSOzkAxLBXJ7DpumXjGTN4gJ8jY5nmbaZgGeZkf7RLvi6BamUk76vdQ46lxq0_KleSU0UYC7Zyb2jdtcA"
          sx={{ width: 40, height: 40 }}
        />
      </Box>
    </Box>
  );
}