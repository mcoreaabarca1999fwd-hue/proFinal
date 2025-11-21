import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function FeaturedCard() {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, py: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          bgcolor: "#ffffff",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: 240,
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy1p-x46nfG49E1FoOTIaIbup_8K-XiXhSm0ks0hQdJvhuhuYcClPKFoOjWILCOviU9HYtAzMqRQcdCW2UiYVyregM81fxl94wVzjGc-RDJWMLKZGd7qh-NZGBGaZMXuXlkWGew_OAjWH5S0UiizWZW_nSFuLgmRoWmkt8kaiaYPQUOdaqMfpjYx7ZSDvL7jJ_EVgrYgkJKopbNvTA7c7JOo-3gLmvuo4ufsWTL5jzW2SXOBfSGsLSGH8i_7nNCwxX4AmPNHBZ2vID')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box sx={{ p: 4, display: "flex", flexDirection: "column", justifyContent: "center", gap: 1.5 }}>
          <Typography sx={{ color: "#eb47b4", fontWeight: 700, fontSize: 12 }}>GUÍA PRÁCTICA</Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 800, color: "#181115" }}>Entendiendo las Fases de tu Ciclo</Typography>
          <Typography sx={{ color: "#333", mt: 1.5 }}>
            Una guía completa para conocer cada fase de tu ciclo menstrual y cómo aprovechar su energía.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, alignSelf: "flex-start", bgcolor: "#eb47b4", "&:hover": { bgcolor: "#d63b99" } }}
          >
            Leer más
          </Button>
        </Box>
      </Box>
    </Box>
  );
}