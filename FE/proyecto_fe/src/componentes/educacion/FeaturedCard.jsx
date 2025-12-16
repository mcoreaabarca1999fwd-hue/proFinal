import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

export default function FeaturedCard() {
  const navigate = useNavigate();

  // Animación de entrada
  const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          bgcolor: "#ffffff",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          animation: `${fadeUp} 0.8s ease forwards`,
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/* Imagen */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: 200, md: 260 },
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy1p-x46nfG49E1FoOTIaIbup_8K-XiXhSm0ks0hQdJvhuhuYcClPKFoOjWILCOviU9HYtAzMqRQcdCW2UiYVyregM81fxl94wVzjGc-RDJWMLKZGd7qh-NZGBGaZMXuXlkWGew_OAjWH5S0UiizWZW_nSFuLgmRoWmkt8kaiaYPQUOdaqMfpjYx7ZSDvL7jJ_EVgrYgkJKopbNvTA7c7JOo-3gLmvuo4ufsWTL5jzW2SXOBfSGsLSGH8i_7nNCwxX4AmPNHBZ2vID')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        {/* Contenido */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: "#9946ec", fontWeight: 700, fontSize: 12, letterSpacing: 1 }}>
            GUÍA PRÁCTICA
          </Typography>
          <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 800, color: "#181115" }}>
            Entendiendo las Fases de tu Ciclo
          </Typography>
          <Typography sx={{ color: "#555", mt: 1.5, lineHeight: 1.6 }}>
            Una guía completa para conocer cada fase de tu ciclo menstrual y cómo aprovechar su energía.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              alignSelf: "flex-start",
              bgcolor: "#9946ec",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              px: 3,
              "&:hover": {
                bgcolor: "#833acbff",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
              },
            }}
            onClick={() => navigate("/articulos")}
          >
            Leer más
          </Button>
        </Box>
      </Box>
    </Box>
  );
}