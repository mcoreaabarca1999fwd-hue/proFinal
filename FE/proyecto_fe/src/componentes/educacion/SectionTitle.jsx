import React from "react";
import { Typography, Box } from "@mui/material";

export default function SectionTitle({ children, sx = {} }) {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, pt: 4, pb: 1, ...sx }}>
      <Typography sx={{ fontSize: 20, fontWeight: 800, color: "#181115" }}>{children}</Typography>
    </Box>
  );
}