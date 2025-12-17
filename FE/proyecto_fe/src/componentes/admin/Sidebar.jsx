import { 
  Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider 
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/admin-dashboard" },
    { label: "Gestión de Usuarios", icon: <GroupIcon />, path: "/admin-users" },
    { label: "Moderación de Foro", icon: <ForumIcon />, path: "/admin-moderacion-foro" },
  ];

  const bottomItems = [
    { label: "Usuario", icon: <AccountCircleIcon />, path: "/perfil" },
    { label: "Cerrar Sesión", icon: <LogoutIcon />, path: "/" },
  ];

  return (
    <Box
      sx={{
        width: 260,
        p: 2,
        borderRight: "1px solid #e0e0e0",
        bgcolor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <AutorenewIcon sx={{ color: "#9947eb", fontSize: 32 }} />
        <Box>
          <Typography fontWeight="bold" color="#333" fontSize={18}>
            AlmaFloral
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Panel de Control
          </Typography>
        </Box>
      </Box>

      {/* Navegación principal */}
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item, i) => (
          <ListItemButton
            key={i}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { bgcolor: "#f3e8ff" },
              transition: "all 0.3s ease",
            }}
          >
            <ListItemIcon sx={{ color: "#7B2CBF" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Bloque inferior */}
      <List>
        {bottomItems.map((item, i) => (
          <ListItemButton
            key={i}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { bgcolor: "#f3f3f3" },
              transition: "all 0.3s ease",
            }}
          >
            <ListItemIcon sx={{ color: "#555" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
