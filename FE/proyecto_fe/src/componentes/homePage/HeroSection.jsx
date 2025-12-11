import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

export default function HeroSection() {
  const navigate = useNavigate();

  // Animaciones
  const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  `;
  const zoomIn = keyframes`
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  `;
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  `;

  return (
    <Box
      px={{ xs: 3, lg: 10 }}
      py={{ xs: 8, md: 20 }}
      display="flex"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      alignItems="center"
      gap={{ xs: 6, md: 10 }}
    >
      {/* Texto con animación secuencial */}
      <Box flex={1} display="flex" flexDirection="column" gap={3}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#333",
            lineHeight: 1.2,
            fontSize: { xs: "2rem", md: "2.8rem" },
            animation: `${fadeUp} 0.8s ease forwards`,
          }}
        >
          Conecta con tu ciclo. Entiende tu cuerpo.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: 500,
            animation: `${fadeUp} 0.8s ease forwards`,
            animationDelay: "0.3s",
          }}
        >
          Nuestra aplicación te ayuda a llevar un seguimiento menstrual preciso y a recibir consejos personalizados para tu bienestar diario.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#9946ec",
            maxWidth: 300,
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "8px",
            animation: `${bounce} 1s ease 0.6s`,
            animationIterationCount: "1",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "#7B2CBF",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
            },
          }}
          onClick={() => navigate("/registro")}
        >
          Empieza a cuidarte hoy
        </Button>
      </Box>

      {/* Imagen con animación */}
      <Box
        flex={1}
        height={{ xs: 280, md: 400 }}
        borderRadius="16px"
        sx={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoXyjPVAwvvjh9QiINvL4nycJ5Amci5ik_9MW6f5PkT6T5zbyaf2CmiC0Z3PtktTUPRlewEPJj2TeK8IFimNofT_j_j6dPkrhrkX-H-XfyCvtyebYZ6XSFrMNv6jaxBjPmbyblU-lp0Gu9SmwfgHmiCYtaQiQ0WdJ7L7bWHs-eWkWRZW-ZuvBrEGvmgdrZkPYMK5afnL3Unxot2Wc8WTvocNZPwDVlLHqW8G5m57U1EvK93LIkwO3oquXd_8RRb78EXP9ShBPmMj4r")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
          animation: `${zoomIn} 1s ease forwards`,
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.03) translateY(-4px)",
          },
        }}
      />
    </Box>
  );
}