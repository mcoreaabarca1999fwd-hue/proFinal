import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: 260,
        p: 2,
        borderRight: "1px solid #ddd",
        bgcolor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <AutorenewIcon sx={{ color: "#c319e6" }} />
        <Box>
          <Typography fontWeight="bold">CycleTrack</Typography>
          <Typography variant="body2" color="gray">Panel de Control</Typography>
        </Box>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        <ListItemButton selected>
          <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={()=>{
                navigate('/admin-users')
              }}><ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Gestión de Usuarios" />
        </ListItemButton>

        <ListItemButton
        onClick={()=>{
                navigate('/admin-moderacion-foro')
              }}
        ><ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Moderación de Foro" />
        </ListItemButton>

        <ListItemButton
        onClick={()=>{
                navigate('/admin-reportes')
              }}
        >
          <ListItemIcon><ArticleIcon /></ListItemIcon>
          <ListItemText primary="Gestión de Contenido" />
        </ListItemButton>

        <ListItemButton
        onClick={()=>{
                navigate('/admin-reportes')
              }}
        >
          <ListItemIcon><FlagIcon /></ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItemButton>
      </List>

      <List>
        <ListItemButton>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItemButton>
      </List>
    </Box>
  );
}