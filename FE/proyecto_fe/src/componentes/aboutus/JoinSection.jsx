import { Box, Typography, Button, Slide } from "@mui/material";

export default function JoinSection() {
  return (
    <Slide in direction="left" timeout={800}>
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          backgroundColor: "#f3f3f3",
          px: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Únete a Nosotros
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4} maxWidth={700} mx="auto">
          Sé parte de una empresa que valora el talento y la innovación.
        </Typography>

        <Button variant="contained" size="large">
          Contáctanos
        </Button>
      </Box>
    </Slide>
  );
}