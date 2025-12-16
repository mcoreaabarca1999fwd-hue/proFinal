import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { keyframes } from "@mui/system";

export default function ResourceCard({ image, tag, title, description, href = "#" }) {
  // Animación de entrada
  const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        animation: `${fadeUp} 0.6s ease forwards`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
        },
        height: "100%",
      }}
    >
      {/* Imagen con overlay */}
      <Box
        sx={{
          position: "relative",
          height: 160,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.4s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.15)",
          }}
        />
      </Box>

      {/* Contenido */}
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#eb47b4", letterSpacing: 1 }}>
          {tag}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#181115", lineHeight: 1.4 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#555", flex: 1, lineHeight: 1.6 }}>
          {description}
        </Typography>
        <Link
          href={href}
          underline="none"
          sx={{
            mt: 1,
            fontWeight: 700,
            color: "#eb47b4",
            position: "relative",
            width: "fit-content",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#d63b99",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: "0%",
              height: "2px",
              bgcolor: "#eb47b4",
              transition: "width 0.3s ease",
            },
            "&:hover:after": {
              width: "100%",
            },
          }}
        >
          Leer artículo →
        </Link>
      </Box>
    </Box>
  );
}