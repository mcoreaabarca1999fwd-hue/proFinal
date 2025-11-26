import { Chip } from "@mui/material";

export default function StatusChip({ status = "Pendiente" }) {
  const map = {
    Pendiente: { label: "Pendiente", color: "warning" },
    "Resuelto (Eliminado)": { label: "Resuelto (Eliminado)", color: "success" },
    "Resuelto (Aprobado)": { label: "Resuelto (Aprobado)", color: "success" },
    Bloqueado: { label: "Bloqueado", color: "error" },
  };

  const entry = map[status] || { label: status, color: "default" };
  return <Chip size="small" label={entry.label} color={entry.color} variant="outlined" />;
}