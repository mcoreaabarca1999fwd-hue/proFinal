import { 
  TableRow, TableCell, Avatar, IconButton, Box, Typography, Tooltip 
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArchiveIcon from "@mui/icons-material/Archive";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StatusChip from "./StatusChip";

export default function ReportRow({ item = {}, onAction = () => {} }) {
  return (
    <TableRow 
      hover 
      sx={{ "&:hover": { bgcolor: "#fafafa" }, transition: "background-color 0.3s ease" }}
    >
      {/* Contenido principal */}
      <TableCell>
        <Box sx={{ maxWidth: 360 }}>
          <Typography fontWeight={700} noWrap color="#333">
            {item.content}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {item.subtitle}
          </Typography>
        </Box>
      </TableCell>

      {/* Usuario */}
      <TableCell>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar 
            src={item.avatar} 
            sx={{ width: 36, height: 36, border: "2px solid #f3e8ff" }} 
          />
          <Typography noWrap fontSize={14} color="#444">
            {item.user}
          </Typography>
        </Box>
      </TableCell>

      {/* Razón */}
      <TableCell>
        <Typography fontSize={13} color="#555">{item.reason}</Typography>
      </TableCell>

      {/* Fecha */}
      <TableCell>
        <Typography fontSize={13} color="text.secondary">{item.date}</Typography>
      </TableCell>

      {/* Estado */}
      <TableCell>
        <StatusChip status={item.status} />
      </TableCell>

      {/* Acciones */}
      <TableCell align="right">
        <Box display="flex" gap={1} justifyContent="flex-end" alignItems="center">
          {/* Pendientes */}
          {item.status && item.status.toLowerCase().includes("pendient") && (
            <>
              <Tooltip title="Aprobar">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "approve")} 
                  sx={{ "&:hover": { bgcolor: "#e8f5e9" } }}
                >
                  <CheckCircleIcon color="success" fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Editar">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "edit")} 
                  sx={{ "&:hover": { bgcolor: "#f3f0f9" } }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Eliminar">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "delete")} 
                  sx={{ "&:hover": { bgcolor: "#ffebee" } }}
                >
                  <DeleteIcon color="error" fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Suspender usuario">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "block")} 
                  sx={{ "&:hover": { bgcolor: "#ffebee" } }}
                >
                  <BlockIcon color="error" fontSize="small" />
                </IconButton>
              </Tooltip>
            </>
          )}

          {/* Resueltos */}
          {item.status && item.status.toLowerCase().includes("resuelt") && (
            <>
              <Tooltip title="Ver detalles">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "view")} 
                  sx={{ "&:hover": { bgcolor: "#f3f3f3" } }}
                >
                  <VisibilityIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Archivar">
                <IconButton 
                  size="small" 
                  onClick={() => onAction(item, "archive")} 
                  sx={{ "&:hover": { bgcolor: "#f3f3f3" } }}
                >
                  <ArchiveIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </>
          )}

          {/* Advertencia */}
          {item.reason && /acoso|odio/i.test(item.reason) && (
            <Tooltip title="Advertencia">
              <IconButton 
                size="small" 
                onClick={() => onAction(item, "warn")} 
                sx={{ "&:hover": { bgcolor: "#fff8e1" } }}
              >
                <WarningAmberIcon color="warning" fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
