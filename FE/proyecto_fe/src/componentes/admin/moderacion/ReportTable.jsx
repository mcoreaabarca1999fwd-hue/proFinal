import { Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Box, Pagination, Typography } from "@mui/material";
import ReportRow from "./ReportRow";

export default function ReportTable({ data = [], page = 1, totalPages = 1, onPageChange = () => {}, onAction = () => {} }) {
  return (
    <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
      <TableContainer>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#fafafa" }}>
            <TableRow>
              <TableCell>Contenido Reportado</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Motivo del Reporte</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right"><Typography variant="srOnly">Acciones</Typography></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  Sin resultados
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => <ReportRow key={item.id} item={item} onAction={onAction} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Mostrando {data.length ? 1 : 0} a {data.length} de {totalPages * 10}
        </Typography>

        <Pagination count={totalPages} page={page} onChange={(_, v) => onPageChange(v)} color="primary" size="small" />
      </Box>
    </Paper>
  );
}