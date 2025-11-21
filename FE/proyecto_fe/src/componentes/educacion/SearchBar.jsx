import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ placeholder = "Busca temas de salud, ciclo menstrual y más" }) {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, py: 2 }}>
      <TextField
        fullWidth
        placeholder={placeholder}
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#a18a99" }} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{
          borderRadius: "12px",
          bgcolor: "#f4f0f3",
          "& .MuiFilledInput-input": { py: "12px" },
        }}
      />
    </Box>
  );
}