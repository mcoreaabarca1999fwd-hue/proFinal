import { Box, Pagination, Typography } from "@mui/material";

export default function PaginationControls({
  page = 1,
  totalPages = 5,
  onChange = () => {},
}) {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      {/* Información de páginas */}
      <Typography variant="body2" color="text.secondary">
        Página {page} de {totalPages}
      </Typography>

      {/* Componente de paginación */}
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onChange(value)}
        color="primary"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
}
