import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "#4A2251",
        borderBottom: "1px solid #F1DFE5",
        px: { xs: 2, sm: 4 },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 28, height: 28, color: "#D69FDB" }}>
            {/* SVG Icon */}
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </Box>

          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            AppCycle
          </Typography>
        </Box>

        {/* Desktop nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography>Inicio</Typography>
          <Typography>Calendario</Typography>
          <Typography>Reportes</Typography>
          <Typography sx={{ color: "#D69FDB", fontWeight: "bold" }}>
            Preguntas Frecuentes
          </Typography>

          {/* Settings Button */}
          <IconButton
            sx={{
              backgroundColor: "#FAE6FB",
              "&:hover": { backgroundColor: "#D69FDB33" },
            }}
          >
            <SettingsIcon sx={{ color: "#4A2251" }} />
          </IconButton>

          <Avatar
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVxNR_8ZQo6m7fxXX9CEfnom7VNjPNV4ETBaypueZrGFHad55qqbWmsSKjL2X362Tc4r4VdZrTx5w-BABW_RtPqvy0MSBd0HutJGxoSKY4zYiUAwXlUtW05TeYECAkopPBXhGOuBl5u-Ji4gFpWECGzAXs1LQ5jNuRID0vgSJgKaOtla_ghanafiRuIP2nySwMlYlvyIz1M88hpsIxeQSq5AmnQIBe_onKRuNLDfxrKergnW_kGPnrpDT8WTc_7dY5YypoWXnmcQ8Z"
            sx={{ width: 40, height: 40 }}
          />
        </Box>

        {/* Mobile Menu */}
        <IconButton sx={{ display: { xs: "flex", md: "none" }, color: "#4A2251" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}