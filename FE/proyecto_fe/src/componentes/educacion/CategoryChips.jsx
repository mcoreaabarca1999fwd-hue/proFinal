import React, { useState } from "react";
import { Box, Chip } from "@mui/material";

const items = ["Todo", "Ciclo Menstrual", "Salud Sexual", "Bienestar", "Fertilidad", "Glosario"];

export default function CategoryChips() {
  const [selected, setSelected] = useState("Todo");

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6, lg: 10 },
        py: 1.5,
        display: "flex",
        gap: 1,
        overflowX: "auto",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": { display: "none" }, // Chrome
      }}
    >
      {items.map((label) => (
        <Chip
          key={label}
          label={label}
          clickable
          onClick={() => setSelected(label)}
          sx={{
            bgcolor: selected === label ? "#9946ec" : "#f4f0f3",
            color: selected === label ? "#fff" : "#333",
            fontWeight: 600,
            height: 36,
            px: 2,
            borderRadius: "20px",
            transition: "all 0.3s ease",
            boxShadow: selected === label ? "0px 4px 10px rgba(0,0,0,0.15)" : "none",
            "&:hover": {
              transform: "translateY(-2px)",
              bgcolor: selected === label ? "#9946ec" : "#e8e3e7",
            },
          }}
        />
      ))}
    </Box>
  );
}