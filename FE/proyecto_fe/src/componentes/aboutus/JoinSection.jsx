import { Box, Typography, Button, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function JoinSection() {
  const navigate = useNavigate();
  return (
    <Slide in direction="left" timeout={800}>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          textAlign: "center",
          background: "linear-gradient(135deg, #f9f5ff 0%, #f3f3f3 100%)",
          borderRadius: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#181115", lineHeight: 1.2 }}
        >
          Únete a Nosotros
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          maxWidth={700}
          mx="auto"
          sx={{ lineHeight: 1.6 }}
        >
          Sé parte de nosotros, unete como profecional.
        </Typography>

        <Button
        onClick={()=>{
                navigate('/soporte')
              }}
          variant="contained"
          size="large"
          sx={{
            bgcolor: "var(--primary-dark)",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 3,
            px: 4,
            py: 1.2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#7B2CBF",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
            },
          }}
        >
          Contáctanos
        </Button>
      </Box>
    </Slide>
  );
}