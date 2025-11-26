import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
export default function TopNavBar() {
  const navigate = useNavigate();
  return (
    <Box
      component="header"
      position="sticky"
      top={0}
      zIndex={50}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ xs: 3, lg: 10 }}
      py={1.5}
      borderBottom="1px solid rgba(0,0,0,0.1)"
      bgcolor="rgba(247,246,248,0.8)"
      backdropFilter="blur(6px)"
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box color="#9946ec">
          <svg fill="none" viewBox="0 0 48 48" width={32} height={32}>
            <path
              d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              fill="currentColor"
            />
          </svg>
        </Box>
        <Typography fontWeight="bold" variant="h6">
          AlmaFloral
        </Typography>
      </Box>
      <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={4}>
        <Box display="flex" gap={3}>
          <Typography sx={{ cursor: "pointer" }}>Funcionalidades</Typography>
          <Typography sx={{ cursor: "pointer" }}>Comunidad</Typography>
          <Typography sx={{ cursor: "pointer" }}>Recursos</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Button variant="outlined" size="small" 
              onClick={()=>{
                navigate('/login')
              }}
            >Iniciar Sesión</Button>
          <Button variant="contained" size="small" color="primary"
            onClick={()=>{
              navigate('/registro')
            }}
          >Regístrate</Button>
        </Box>
      </Box>
      <IconButton sx={{ display: { md: "none" } }}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
}