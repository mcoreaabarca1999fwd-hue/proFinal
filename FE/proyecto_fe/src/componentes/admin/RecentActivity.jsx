import { Card, Typography, Box, Paper } from "@mui/material";
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
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
        sx={{ color: "var(--primary-dark)" }}
      >
        Actividad Reciente
      </Typography>

      {items.map((i, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            mb: 2,
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              bgcolor: "#fafafa",
            },
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${i.color}22`,
              color: i.color,
              fontSize: 22,
            }}
          >
            {i.icon}
          </Box>
          <Box>
            <Typography fontWeight="bold" sx={{ color: "#181115" }}>
              {i.text}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {i.time}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Card>
  );
}