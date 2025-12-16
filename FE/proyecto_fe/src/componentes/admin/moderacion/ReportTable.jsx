import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Box,
  Pagination,
  Typography
} from "@mui/material";
import ReportRow from "./ReportRow";

export default function ReportTable({
  data = [],
  page = 1,
  totalPages = 1,
  onPageChange = () => {},
  onAction = () => {}
}) {
  return (
    <Paper
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
      }}
    >
      <TableContainer>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#f9f5ff" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Contenido</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Usuario</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>De</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
              <TableCell align="right">
                <Typography variant="srOnly">Acciones</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  <Typography variant="body1" color="text.secondary">
                    🚫 Sin resultados
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <ReportRow key={item.id} item={item} onAction={onAction} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderTop: "1px solid #eee",
          bgcolor: "#fafafa"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Mostrando {data.length ? 1 : 0} a {data.length} de {totalPages * 10}
        </Typography>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, v) => onPageChange(v)}
          color="primary"
          size="small"
          sx={{
            "& .MuiPaginationItem-root": {
              borderRadius: 2,
              "&.Mui-selected": {
                bgcolor: "var(--primary-dark)",
                color: "#fff"
              }
            }
          }}
        />
      </Box>
    </Paper>
  );
}