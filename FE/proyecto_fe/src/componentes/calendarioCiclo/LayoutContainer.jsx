import { Box } from "@mui/material";

export default function LayoutContainer({ children }) {
  return (
    <Box sx={{
      backgroundColor: "var(--background-light)",
      minHeight: "100vh",
      p: 4
    }}>
      {children}
    </Box>
  );
}
