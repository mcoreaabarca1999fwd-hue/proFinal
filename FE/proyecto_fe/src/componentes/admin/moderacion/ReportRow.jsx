import { TableRow, TableCell, Avatar, IconButton, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArchiveIcon from "@mui/icons-material/Archive";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StatusChip from "./StatusChip";

export default function ReportRow({ item = {}, onAction = () => {} }) {
  // item: { id, content, subtitle, user, avatar, reason, date, status }
  return (
    <TableRow hover>
      <TableCell>
        <Box sx={{ maxWidth: 360 }}>
          <Typography fontWeight={700} noWrap>{item.content}</Typography>
          <Typography variant="caption" color="text.secondary">{item.subtitle}</Typography>
        </Box>
      </TableCell>

      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={item.avatar} sx={{ width: 32, height: 32 }} />
          <Typography noWrap>{item.user}</Typography>
        </Box>
      </TableCell>

      <TableCell>{item.reason}</TableCell>
      <TableCell>{item.date}</TableCell>

      <TableCell><StatusChip status={item.status} /></TableCell>

      <TableCell align="right">
        <Box display="flex" gap={0.5} justifyContent="flex-end" alignItems="center">
          {/* Pendientes: approve/edit/delete/block */}
          {item.status && item.status.toLowerCase().includes("pendient") && (
            <>
              <IconButton size="small" title="Aprobar" onClick={() => onAction(item, "approve")}>
                <CheckCircleIcon color="success" fontSize="small" />
              </IconButton>

              <IconButton size="small" title="Editar" onClick={() => onAction(item, "edit")}>
                <EditIcon fontSize="small" />
              </IconButton>

              <IconButton size="small" title="Eliminar" onClick={() => onAction(item, "delete")}>
                <DeleteIcon color="error" fontSize="small" />
              </IconButton>

              <IconButton size="small" title="Suspender usuario" onClick={() => onAction(item, "block")}>
                <BlockIcon color="error" fontSize="small" />
              </IconButton>
            </>
          )}

          {/* Resueltos: view / archive */}
          {item.status && item.status.toLowerCase().includes("resuelt") && (
            <>
              <IconButton size="small" title="Ver detalles" onClick={() => onAction(item, "view")}>
                <VisibilityIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" title="Archivar" onClick={() => onAction(item, "archive")}>
                <ArchiveIcon fontSize="small" />
              </IconButton>
            </>
          )}

          {/* adicional: warning icon for certain reasons */}
          {item.reason && /acoso|odio/i.test(item.reason) && (
            <IconButton size="small" title="Advertencia" onClick={() => onAction(item, "warn")}>
              <WarningAmberIcon color="warning" fontSize="small" />
            </IconButton>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
