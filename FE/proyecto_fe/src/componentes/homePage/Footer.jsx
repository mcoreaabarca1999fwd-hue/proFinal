import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box bgcolor="rgba(0,0,0,0.05)" borderTop="1px solid rgba(0,0,0,0.1)" px={{ xs: 3, lg: 10 }} py={8}>
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "repeat(4,1fr)" }} gap={4}>
        <Box>
          <Typography fontWeight="bold" mb={1}>Cycla</Typography>
          <Typography variant="body2" color="text.secondary">Conectando contigo, en cada ciclo.</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Producto</Typography>
          <Link href="#" display="block" color="text.secondary">Funcionalidades</Link>
          <Link href="#" display="block" color="text.secondary">Precios</Link>
          <Link href="#" display="block" color="text.secondary">Seguridad</Link>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Empresa</Typography>
          <Link href="#" display="block" color="text.secondary">Sobre Nosotros</Link>
          <Link href="#" display="block" color="text.secondary">Blog</Link>
          <Link href="#" display="block" color="text.secondary">Contacto</Link>
        </Box>
        <Box>
          <Typography fontWeight="bold" mb={1}>Legal</Typography>
          <Link href="#" display="block" color="text.secondary">Términos de Servicio</Link>
          <Link href="#" display="block" color="text.secondary">Política de Privacidad</Link>
          <Link href="#" display="block" color="text.secondary">Cookies</Link>
        </Box>
      </Box>
      <Typography textAlign="center" variant="body2" color="text.secondary" mt={4}>
        © 2024 Cycla. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
