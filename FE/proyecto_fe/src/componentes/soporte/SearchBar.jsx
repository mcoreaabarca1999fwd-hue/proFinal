import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #E6B4D6",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          height: 56,
          px: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <SearchIcon sx={{ color: "#8D8395", fontSize: 28 }} />
        <InputBase
          placeholder="¿Cómo podemos ayudarte?"
          sx={{
            ml: 2,
            flex: 1,
            color: "#4A454E",
            fontSize: "16px",
          }}
        />
      </Box>
    </Box>
  );
}