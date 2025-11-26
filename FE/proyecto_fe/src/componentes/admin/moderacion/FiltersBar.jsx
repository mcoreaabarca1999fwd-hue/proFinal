import { Box, TextField, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function FiltersBar({ value = "", onSearch = () => {}, filter = "Todos los reportes", onFilter = () => {} }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        size="small"
        placeholder="Buscar por contenido o usuario..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ opacity: 0.6, mr: 1 }} />,
        }}
        sx={{ width: { xs: "100%", sm: 320 } }}
      />

      <TextField
        size="small"
        select
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
        sx={{ width: { xs: "100%", sm: 200 } }}
      >
        <MenuItem value="Todos los reportes">Todos los reportes</MenuItem>
        <MenuItem value="Publicaciones">Publicaciones</MenuItem>
        <MenuItem value="Comentarios">Comentarios</MenuItem>
        <MenuItem value="Pendientes">Pendientes</MenuItem>
        <MenuItem value="Resueltos">Resueltos</MenuItem>
      </TextField>
    </Box>
  );
}