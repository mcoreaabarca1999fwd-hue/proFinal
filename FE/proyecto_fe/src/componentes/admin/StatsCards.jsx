import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

export default function StatsCards() {
  const stats = [
    { label: "Usuarios Activos", value: "2,480", percent: "+5.2%" },
    { label: "Nuevos Registros", value: "102", percent: "+10%" },
    { label: "Publicaciones Hoy", value: "315", percent: "+2.1%" },
    { label: "Reportes Pendientes", value: "12", percent: "-3.5%", isNegative: true }
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((s, i) => (
        <Grid item xs={12} sm={6} lg={3} key={i}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
                bgcolor: "#fafafa",
              },
            }}
          >
            <CardContent>
              <Typography
                color="text.secondary"
                sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}
              >
                {s.label}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#181115", mb: 1 }}
              >
                {s.value}
              </Typography>
              <Box
                sx={{
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: 13,
                  fontWeight: 600,
                  bgcolor: s.isNegative ? "error.light" : "success.light",
                  color: s.isNegative ? "error.dark" : "success.dark",
                }}
              >
                {s.percent}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}