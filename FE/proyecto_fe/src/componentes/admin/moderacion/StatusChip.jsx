import { Chip } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";

export default function StatusChip({ status = "Pendiente" }) {
  const map = {
    Pendiente: {
      label: "Pendiente",
      color: "warning",
      icon: <HourglassEmptyIcon fontSize="small" />,
      sx: { bgcolor: "#fff8e1", color: "#f57c00", borderColor: "#f57c00" },
    },
    "Resuelto (Eliminado)": {
      label: "Resuelto (Eliminado)",
      color: "success",
      icon: <CheckCircleIcon fontSize="small" />,
      sx: { bgcolor: "#e8f5e9", color: "#2e7d32", borderColor: "#2e7d32" },
    },
    "Resuelto (Aprobado)": {
      label: "Resuelto (Aprobado)",
      color: "success",
      icon: <CheckCircleIcon fontSize="small" />,
      sx: { bgcolor: "#e8f5e9", color: "#2e7d32", borderColor: "#2e7d32" },
    },
    Bloqueado: {
      label: "Bloqueado",
      color: "error",
      icon: <BlockIcon fontSize="small" />,
      sx: { bgcolor: "#ffebee", color: "#c62828", borderColor: "#c62828" },
    },
  };

  const entry = map[status] || { label: status, color: "default", sx: {}, icon: null };

  return (
    <Chip
      size="small"
      label={entry.label}
      icon={entry.icon}
      variant="outlined"
      sx={{
        fontWeight: 600,
        px: 1,
        borderRadius: 2,
        ...entry.sx,
      }}
    />
  );
}
