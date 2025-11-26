import { Box, Typography } from "@mui/material";

export default function StatCard({ icon, title, value, iconBg, iconColor }) {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          p: 1.5,
          borderRadius: "50%",
          backgroundColor: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="span" sx={{ color: iconColor, fontSize: 24 }}>
          {icon}
        </Box>
      </Box>

      <Box>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#111827" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}