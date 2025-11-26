import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SyncIcon from "@mui/icons-material/Sync";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          borderRight: "1px solid #e5e7eb",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Header */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Box
            sx={{
              background: "rgba(195,25,230,0.18)",
              p: 1.3,
              borderRadius: 2,
              color: "#c319e6",
            }}
          >
            <SyncIcon />
          </Box>

          <Box>
            <Typography fontWeight="bold" color="text.primary">
              CycleTrack
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Panel de Control
            </Typography>
          </Box>
        </Box>

        {/* Menu */}
        <List>
          <ListItemButton selected sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#c319e6" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Gestión de Usuarios" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Moderación de Foro" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Gestión de Contenido" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Footer */}
        <List>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}