import { Card, CardContent, Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FlagIcon from "@mui/icons-material/Flag";
import CommentIcon from "@mui/icons-material/Comment";

export default function RecentActivity() {
  const items = [
    { icon: <PersonAddIcon />, color: "#c319e6", text: "Nuevo registro: marta_diaz", time: "Hace 5 min" },
    { icon: <PostAddIcon />, color: "green", text: "Nueva publicación de sofia_r", time: "Hace 12 min" },
    { icon: <FlagIcon />, color: "orange", text: "Nuevo reporte de carmen_88", time: "Hace 23 min" },
    { icon: <CommentIcon />, color: "green", text: "Nuevo comentario de elena_v", time: "Hace 45 min" }
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Actividad Reciente</Typography>

      {items.map((i, index) => (
        <Box key={index} display="flex" gap={2} mb={2}>
          <Box sx={{
            width: 40,
            height: 40,
            bgcolor: i.color + "33",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {i.icon}
          </Box>
          <Box>
            <Typography>{i.text}</Typography>
            <Typography variant="caption" color="gray">{i.time}</Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
}