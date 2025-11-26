import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SyncIcon from "@mui/icons-material/Sync";

export default function Sidebar() {
  const items = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Gestión de Usuarios", icon: <GroupIcon /> },
    { text: "Moderación de Foro", icon: <ForumIcon />, active: true },
    { text: "Gestión de Contenido", icon: <ArticleIcon /> },
    { text: "Reportes", icon: <FlagIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 260,
        p: 2,
        height: "100vh",
        boxSizing: "border-box",
        borderRight: "1px solid rgba(0,0,0,0.08)",
        bgcolor: "background.paper",
      }}
    >
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Box sx={{ bgcolor: "rgba(195,25,230,0.12)", p: 1.2, borderRadius: 2, color: "#c319e6" }}>
          <SyncIcon />
        </Box>
        <Box>
          <Typography fontWeight={700}>CycleTrack</Typography>
          <Typography variant="body2" color="text.secondary">Panel de Control</Typography>
        </Box>
      </Box>

      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {items.map((it) => (
          <ListItemButton key={it.text} selected={!!it.active} sx={{ borderRadius: 1 }}>
            <ListItemIcon>{it.icon}</ListItemIcon>
            <ListItemText primary={it.text} primaryTypographyProps={{ fontSize: 14 }} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: 3, borderTop: "1px solid rgba(0,0,0,0.06)", pt: 2 }}>
        <ListItemButton sx={{ borderRadius: 1 }}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItemButton>
        <ListItemButton sx={{ borderRadius: 1 }}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItemButton>
      </Box>
    </Box>
  );
}