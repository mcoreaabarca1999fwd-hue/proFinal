import React from "react";
import { Box, Typography, IconButton, Avatar, Icon } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Face2Icon from '@mui/icons-material/Face2';
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #efe7ec",
        bgcolor: "#ffffff",
        px: { xs: 2, md: 6, lg: 10 },
        py: 2,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
        onClick={() => navigate('/about-us')}
          sx={{
            color: "#9946ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "rotate(15deg) scale(1.1)" },
            
          }}
        >
          <EmojiNatureIcon style={{ fontSize: 32 }} />
        </Box>
        <Typography 
        onClick={() => navigate('/')}        
          sx={{
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 20,
            color: "#9946ec",
            transition: "color 0.3s ease",
            "&:hover": { color: "#7B2CBF" },
          }}
        >
          AlmaFloral
        </Typography>
      </Box>

      {/* Links */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography onClick={() => navigate('/admin-dashboard')}
            sx={{
              fontSize: 14,
              color: "#333",
              cursor: "pointer",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {color: "#9946ec",},
              "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
            }}
          >
            Dashboard
          </Typography>
          <Typography 
            onClick={() => navigate('/calendario')}
            sx={{
              fontSize: 14,
              color: "#333",
              cursor: "pointer",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {color: "#9946ec",},
              "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
            }}
          >
            Calendario
          </Typography>
          <Typography
            onClick={() => navigate('/recursos')}
            sx={{
              fontSize: 14,
              color: "#333",
              cursor: "pointer",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {color: "#9946ec",},
              "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
            }}
          >
            Articulos
          </Typography>
          <Typography
            onClick={() => navigate('/foro')}
            sx={{
            fontSize: 14,
              color: "#333",
              cursor: "pointer",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {color: "#9946ec",},
              "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
            }}
          >
            Comunidad
          </Typography>
        </Box>

        {/* Settings + Avatar + Logout */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar
           onClick={() => navigate('/perfil')} 
            sx={{
            fontSize: 14,
              color: "#9946ec",
              cursor: "pointer",
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": {color: "#7B2CBF",},
              "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
            }}
          />
          <IconButton 
            onClick={() => navigate('/')}
            sx={{
              color: "#9946ec",
              transition: "color 0.3s ease",
              "&:hover": { 
                color: "#7B2CBF",
                backgroundColor: "rgba(153, 70, 235, 0.1)"
              },
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile menu button */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          sx={{
            backgroundColor:"#9946ec",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <Face2Icon />
        </IconButton>

        
        <IconButton 
        onClick={()=>{
                navigate('/')
              }}
        >
          <LogoutIcon sx={{color:"#9947eb"}} />
        </IconButton>
          
        
      
      </Box>
    </Box>
  );
}