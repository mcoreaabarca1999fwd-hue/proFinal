import { Box, Typography } from "@mui/material";

export default function DAUChart() {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        p: 3,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827" }}>
        Actividad de Usuarios Diarios (DAU)
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#6b7280", mb: 2 }}
      >
        Octubre 2023
      </Typography>

      <Box sx={{ height: 320, width: "100%" }}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSm6yB8zXWPRBOP2zv7j6Zv-2BXFrAjJWaru6TTQ0RTAGWNt3Vy35yfJ--pWrYLbFmTnoMLkLlzKWgHXfpp9Ck82hNr8kR66KJsz3VjzzL8IFTlVl5QcT-9ENPt5MedytZaFng_vbs69Igoww0771qaNDx6QpNH3R_tICK5MeLkGP7K3BMfDO7Qdr_HbaYazTEVJ0Km34WMgExupHi4PSNju2jV1TGF7jQ5KxM05pC9TrsDPIG25VXzedqAdVpDB0SJQleqS3mJiZ1"
          alt="Gráfico DAU"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}