import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }} textAlign="center" bgcolor="rgba(153,70,236,0.1)" borderRadius={4}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#333" }}>Toma el control de tu bienestar. Hoy.</Typography>
      <Typography color="text.secondary" mb={3}>
        Únete a miles de mujeres que ya están transformando su relación con su cuerpo y su ciclo. El primer paso es el más importante.
      </Typography>
      <Button variant="contained" sx={{background: "#9946ec"}}
      onClick={()=>{
                navigate('/registro')
              }}
      >Regístrate Ahora</Button>
    </Box>
  );
}