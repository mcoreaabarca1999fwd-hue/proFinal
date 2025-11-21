import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function ResourceCard({ image, tag, title, description, href = "#" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
        transition: "box-shadow .2s",
        "&:hover": { boxShadow: "0 12px 28px rgba(0,0,0,0.08)" },
        height: "100%",
      }}
    >
      <Box sx={{ height: 160, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1.25, flex: 1 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#eb47b4" }}>{tag}</Typography>
        <Typography sx={{ fontWeight: 700, color: "#181115" }}>{title}</Typography>
        <Typography sx={{ fontSize: 13, color: "#88637c", flex: 1 }}>{description}</Typography>
        <Link href={href} sx={{ mt: 1, fontWeight: 700, color: "#eb47b4" }}>
          Leer artículo →
        </Link>
      </Box>
    </Box>
  );
}