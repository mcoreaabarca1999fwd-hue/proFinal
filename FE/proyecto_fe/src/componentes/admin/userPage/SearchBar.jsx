import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function SearchBar() {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        justifyContent: "space-between",
        alignItems: { xs: "stretch", sm: "center" },
      }}
    >
      {/* Campo de búsqueda */}
      <TextField
        placeholder="Buscar usuario..."
        size="small"
        sx={{ width: { xs: "100%", sm: "300px" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      {/* Botón agregar */}
      <Button
        variant="contained"
        startIcon={<PersonAddIcon />}
        sx={{
          backgroundColor: "#c319e6",
          "&:hover": { backgroundColor: "#a313c2" },
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 500,
          px: 3,
        }}
      >
        Agregar Usuario
      </Button>
    </Box>
  );
}