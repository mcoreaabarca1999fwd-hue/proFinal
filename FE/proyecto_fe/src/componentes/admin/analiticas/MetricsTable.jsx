import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function MetricsTable({ data }) {
  const getIcon = (trend) => {
    if (trend === "Positiva" || trend === "Muy Positiva") return <ArrowUpwardIcon fontSize="small" />;
    if (trend === "Negativa") return <ArrowDownwardIcon fontSize="small" />;
    return <HorizontalRuleIcon fontSize="small" />;
  };

  const getColor = (trend) => {
    if (trend === "Positiva" || trend === "Muy Positiva") return "#28a745"; // verde
    if (trend === "Negativa") return "#dc3545"; // rojo
    return "#6b7280"; // gris
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, overflowX: "auto" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#f9fafb" }}>
          <TableRow>
            <TableCell>Métrica</TableCell>
            <TableCell>Valor Actual</TableCell>
            <TableCell>Cambio vs Periodo Anterior</TableCell>
            <TableCell>Tendencia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                "&:hover": { backgroundColor: "#f3f4f6" },
              }}
            >
              <TableCell>{row.metric}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell sx={{ color: getColor(row.trend), display: "flex", alignItems: "center", gap: 0.5 }}>
                {getIcon(row.trend)}
                {row.change}
              </TableCell>
              <TableCell>{row.trend}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}