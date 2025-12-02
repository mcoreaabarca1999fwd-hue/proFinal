import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box bgcolor="rgba(0,0,0,0.05)" borderTop="1px solid rgba(0,0,0,0.1)" px={{ xs: 3, lg: 10 }} py={8}>
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "repeat(4,1fr)" }} gap={4}>
        <Box>
          <Typography fontWeight="bold" mb={1}>AlmaFloral</Typography>
          <Typography variant="body2" color="text.secondary">Conectando contigo, en cada ciclo.</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Producto</Typography>
          <Link href="#" display="block" color="text.secondary">Funcionalidades</Link>
          <Link href="#" display="block" color="text.secondary"></Link>
          <Link href="#" display="block" color="text.secondary">Seguridad</Link>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Empresa</Typography>
          <Link href="#" display="block" color="text.secondary">Sobre Nosotros</Link>
          <Link href="#" display="block" color="text.secondary">Artículos</Link>
          <Link href="#" display="block" color="text.secondary"
          onClick={()=>{
              navigate('/registro')
            }}
          >Quisieras colaborar como profesional?</Link>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Legal</Typography>
          <Link href="#" display="block" color="text.secondary">Términos de Servicio</Link>
          <Link href="#" display="block" color="text.secondary">Política de Privacidad</Link>
          <Link href="#" display="block" color="text.secondary">Cookies</Link>
        </Box>
      </Box>
      <Typography textAlign="center" variant="body2" color="text.secondary" mt={4}>
        © 2025 AlmaFloral. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
