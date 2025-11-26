import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }} display="flex" flexDirection={{ xs: "column-reverse", md: "row" }} alignItems="center" gap={6}>
      <Box flex={1} display="flex" flexDirection="column" gap={3}>
        <Typography variant="h3" fontWeight="bold">
          Conecta con tu ciclo. Entiende tu cuerpo.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Nuestra aplicación te ayuda a llevar un seguimiento menstrual preciso y a recibir consejos personalizados para tu bienestar diario.
        </Typography>
        <Button variant="contained" color="primary" sx={{ maxWidth: 300 }}>
          Empieza a cuidarte hoy
        </Button>
      </Box>
      <Box
        flex={1}
        height={{ xs: 300, md: 400 }}
        borderRadius="16px"
        sx={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoXyjPVAwvvjh9QiINvL4nycJ5Amci5ik_9MW6f5PkT6T5zbyaf2CmiC0Z3PtktTUPRlewEPJj2TeK8IFimNofT_j_j6dPkrhrkX-H-XfyCvtyebYZ6XSFrMNv6jaxBjPmbyblU-lp0Gu9SmwfgHmiCYtaQiQ0WdJ7L7bWHs-eWkWRZW-ZuvBrEGvmgdrZkPYMK5afnL3Unxot2Wc8WTvocNZPwDVlLHqW8G5m57U1EvK93LIkwO3oquXd_8RRb78EXP9ShBPmMj4r")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </Box>
  );
}