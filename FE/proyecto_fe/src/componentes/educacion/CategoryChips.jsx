import React from "react";
import { Box, Chip } from "@mui/material";

const items = ["Todo", "Ciclo Menstrual", "Salud Sexual", "Bienestar", "Fertilidad", "Glosario"];

export default function CategoryChips() {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, py: 1, display: "flex", gap: 1, overflowX: "auto" }}>
      {items.map((label, idx) => (
        <Chip
          key={label}
          label={label}
          sx={{
            bgcolor: idx === 0 ? "#eb47b4" : "#f4f0f3",
            color: idx === 0 ? "#fff" : "#333",
            fontWeight: 600,
            height: 36,
            px: 2,
          }}
        />
      ))}
    </Box>
  );
}