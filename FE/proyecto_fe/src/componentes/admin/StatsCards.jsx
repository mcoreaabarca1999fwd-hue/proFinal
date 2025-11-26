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
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography color="text.secondary">{s.label}</Typography>
              <Typography variant="h4" fontWeight="bold">{s.value}</Typography>
              <Typography sx={{ color: s.isNegative ? "error.main" : "success.main" }}>
                {s.percent}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}