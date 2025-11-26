import { Box, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CycleIcon from "@mui/icons-material/ChangeCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Gestión de Usuarios", icon: <GroupIcon /> },
    { label: "Moderación de Foro", icon: <ForumIcon /> },
    { label: "Gestión de Contenido", icon: <ArticleIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: "white",
        borderRight: "1px solid #e5e7eb",
        p: 2,
        height: "100vh",
      }}
    >
      {/* LOGO */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 4 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: "50%",
            backgroundColor: "rgba(195,25,230,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c319e6",
          }}
        >
          <CycleIcon />
        </Box>
        <Box>
          <Typography fontWeight={700}>CycleTrack</Typography>
          <Typography fontSize={13} color="GrayText">Panel de Control</Typography>
        </Box>
      </Box>

      {/* NAV */}
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}

        {/* ACTIVO */}
        <ListItemButton
          sx={{
            backgroundColor: "rgba(195,25,230,0.2)",
            color: "#c319e6",
            borderRadius: 2,
            mt: 1,
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "#c319e6" }}>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItemButton>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* FOOTER NAV */}
      <List>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesión" />
        </ListItemButton>
      </List>
    </Box>
  );
}