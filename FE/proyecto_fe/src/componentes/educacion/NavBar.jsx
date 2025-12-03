import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

export default function NavBar() {
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
          sx={{
            color: "#eb47b4",
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
          sx={{
            fontWeight: 700,
            fontSize: 18,
            color: "#181115",
            transition: "color 0.3s ease",
            "&:hover": { color: "#eb47b4" },
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
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#eb47b4",
                transform: "translateY(-2px)",
              },
            }}
          >
            Dashboard
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#eb47b4",
                transform: "translateY(-2px)",
              },
            }}
          >
            Calendario
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#eb47b4",
                transform: "translateY(-2px)",
              },
            }}
          >
            Articulos
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#eb47b4",
                transform: "translateY(-2px)",
              },
            }}
          >
            Comunidad
          </Typography>
        </Box>

        {/* Settings + Avatar */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{
              bgcolor: "#f4eef2",
              transition: "transform 0.3s ease, bgcolor 0.3s ease",
              "&:hover": {
                transform: "rotate(90deg)",
                bgcolor: "#eb47b4",
              },
            }}
          >
            <SettingsIcon sx={{ color: "#88637c" }} />
          </IconButton>
          <Avatar
            alt="User"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-6-rlPe94LLHQR3vKwab7uprOml4-g741O7ysfNUZlYQEGOEAwNfW1eCLh4pgJMmNkT18P0Ur76tT0gQ0YVE7jSIKuK2V3lSdGUdqyYdN3o8xO0BEAB5rmyiN_b6r87BmhfA8odmGJdsCeqWcO4xB8qyjYIVYh92i5shPZQppiPFb-igOcAWUd-5gHG3t2MmojyvU35_9RtLjeGqyFPABYe5CGuKMTm8ZptGoJ9eIXe9fI-z2bPAP0iPo1-inJ9ulJXljXduOQpTt"
            sx={{
              width: 40,
              height: 40,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Box>
      </Box>

      {/* Mobile menu button */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}