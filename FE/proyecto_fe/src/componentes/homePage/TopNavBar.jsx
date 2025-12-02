import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

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
      borderBottom="1px solid #efe7ec"
      bgcolor="#ffffff"
      backdropFilter="blur(6px)"
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box color="#9946ec">
          <Box sx={{ color: "#9946ec" }}>
          {/* simple circular svg icon */}
          <EmojiNatureIcon style={{ fontSize: 32 }} />
        </Box>
        </Box>
        <Typography fontWeight="bold" variant="h6" sx={{ color: "#9946ec" }}>
          AlmaFloral
        </Typography>
      </Box>
      <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={4}>
        <Box display="flex" gap={3}>
          <Typography sx={{fontSize: 14, color: "#333", cursor: "pointer" }}>Funcionalidades</Typography>
          <Typography sx={{fontSize: 14, color: "#333", cursor: "pointer" }}>Comunidad</Typography>
          <Typography sx={{fontSize: 14, color: "#333", cursor: "pointer" }}>Recursos</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Button variant="outlined" sx={{color:"#9947eb", borderColor: "#9947eb" }} size="small" 
              onClick={()=>{
                navigate('/login')
              }}
            >Iniciar Sesión</Button>
          <Button variant="contained" size="small" sx={{ background: "#9947eb" }} color="primary"
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