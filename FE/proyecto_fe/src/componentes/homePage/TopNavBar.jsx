import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

export default function TopNavBar() {
  const navigate = useNavigate();
  return (
    <Box
      component="header"
      position="sticky"
      top={0}
      zIndex={50}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ xs: 3, lg: 10 }}
      py={1.5}
      borderBottom="1px solid #E6B4D6"
      bgcolor="#ffffff"
      backdropFilter="blur(6px)"
      sx={{
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Logo */}
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          onClick={() => navigate('/about-us')}
          sx={{
            color: "#9946ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "rotate(10deg) scale(1.1)" },
          }}
        >
          <EmojiNatureIcon style={{ fontSize: 32 }} />
        </Box>
        <Typography
        onClick={() => navigate('/')}
          fontWeight="bold"
          variant="h6"
          sx={{
            cursor: "pointer",
            color: "#9946ec",
            transition: "color 0.3s ease",
            "&:hover": { color: "#7B2CBF" },
          }}
        >
          AlmaFloral
        </Typography>
      </Box>

      {/* Links + Botones */}
      <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={4}>
        <Box display="flex" gap={3}>
          {["Funcionalidades", "Comunidad", "Recursos"].map((item, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 14,
                color: "#333",
                cursor: "pointer",
                position: "relative",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#9946ec",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: "#9946ec",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box display="flex" gap={1}>
          <Button
            variant="outlined"
            sx={{
              color: "#9947eb",
              borderColor: "#9947eb",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f3e8ff",
                borderColor: "#7B2CBF",
              },
            }}
            size="small"
            onClick={() => {
              navigate("/login");
            }}
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: "#9947eb",
              transition: "transform 0.3s ease, background 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                background: "#7B2CBF",
              },
            }}
            color="primary"
            onClick={() => {
              navigate("/registro");
            }}
          >
            Regístrate
          </Button>
        </Box>
      </Box>

      {/* Botón menú móvil */}
      <IconButton
        sx={{
          display: { md: "none" },
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.2)" },
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
