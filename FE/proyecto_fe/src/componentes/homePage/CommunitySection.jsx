import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

export default function CommunitySection() {
  const navigate = useNavigate();

  // Animaciones
  const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;
  const zoomIn = keyframes`
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  `;

  return (
    <Box
      px={{ xs: 3, lg: 10 }}
      py={{ xs: 8, md: 24 }}
      display="grid"
      gridTemplateColumns={{ md: "1fr 1fr" }}
      gap={6}
      alignItems="center"
    >
      {/* Texto con animación */}
      <Box
        sx={{
          animation: `${fadeUp} 0.8s ease forwards`,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#333", lineHeight: 1.2 }}
        >
          Un espacio seguro para ti
        </Typography>
        <Typography
          color="text.secondary"
          mb={2}
          sx={{ maxWidth: 500 }}
        >
          Nuestra comunidad es un foro moderado y empático donde puedes compartir tus experiencias, resolver dudas y sentirte acompañada en cada paso de tu viaje.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#9946ec",
            color: "#9946ec",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#fdf7fc",
              borderColor: "#7B2CBF",
              transform: "translateY(-2px)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
            },
          }}
          onClick={() => {
            navigate("/registro");
          }}
        >
          Únete a la conversación
        </Button>
      </Box>

      {/* Imagen con animación */}
      <Box
        component="img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXo68tl8t3rqGY3AsSJYRVpXOj66f74O0cONl2we7Qw_WrIo0JiSd9EKEb3_WXf45idAgBFvVZkSCC12JXnW7mdMOTs_EzH6tI38ePsd8YdPDD2YjWxXMRJ61TED5orTc4YBbhjsGO41v_B2LvK6jK5mmkkQYPXlft-Sh9kgC7Hf-qN2CCrayKnAUi0FGoiXHRw38KrJQ_HH0mOTt_KQPBjiLe7v28zjozFfwdEGX-fznM9BgMtU3R4wtJ0Dbr1Dlv_fl6wn-lMh2d"
        borderRadius={2}
        width="100%"
        sx={{
          boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
          animation: `${zoomIn} 1s ease forwards`,
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      />
    </Box>
  );
}
