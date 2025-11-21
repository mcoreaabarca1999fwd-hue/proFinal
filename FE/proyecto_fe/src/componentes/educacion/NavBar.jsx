import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

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
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ color: "#eb47b4" }}>
          {/* simple circular svg icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17h2v2h-2v-2zM11 7h2v8h-2V7z"/>
          </svg>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#181115" }}>AlmaFloral</Typography>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography sx={{ fontSize: 14, color: "#333" }}>Dashboard</Typography>
          <Typography sx={{ fontSize: 14, color: "#333" }}>Calendario</Typography>
          <Typography sx={{ fontSize: 14, color: "#eb47b4", fontWeight: 700, borderBottom: "2px solid #eb47b4", pb: "2px" }}>
            Recursos
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#333" }}>Comunidad</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton size="small" sx={{ bgcolor: "#f4eef2" }}>
            <NotificationsIcon sx={{ color: "#88637c" }} />
          </IconButton>
          <IconButton size="small" sx={{ bgcolor: "#f4eef2" }}>
            <SettingsIcon sx={{ color: "#88637c" }} />
          </IconButton>
          <Avatar
            alt="User"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-6-rlPe94LLHQR3vKwab7uprOml4-g741O7ysfNUZlYQEGOEAwNfW1eCLh4pgJMmNkT18P0Ur76tT0gQ0YVE7jSIKuK2V3lSdGUdqyYdN3o8xO0BEAB5rmyiN_b6r87BmhfA8odmGJdsCeqWcO4xB8qyjYIVYh92i5shPZQppiPFb-igOcAWUd-5gHG3t2MmojyvU35_9RtLjeGqyFPABYe5CGuKMTm8ZptGoJ9eIXe9fI-z2bPAP0iPo1-inJ9ulJXljXduOQpTt"
            sx={{ width: 40, height: 40 }}
          />
        </Box>
      </Box>

      {/* Mobile menu button */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}