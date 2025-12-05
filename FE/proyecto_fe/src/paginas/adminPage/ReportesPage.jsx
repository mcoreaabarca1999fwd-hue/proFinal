import { Box, Grid } from "@mui/material";

// Componentes que creamos
import Sidebar from "../../componentes/admin/Sidebar";
import HeaderSection from "../../componentes/admin/analiticas/HeaderSection";
import ReportControls from "../../componentes/admin/analiticas/ReportControls";
import DAUChart from "../../componentes/admin/analiticas/DAUChart";
import StatCard from "../../componentes/admin/analiticas/StatCard";
import MetricsTable from "../../componentes/admin/analiticas/MetricsTable";

export default function ReportesPage() {
  const statsData = [
    { title: "Nuevas Usuarias", value: "1,254", icon: "group", color: "#FADADD" },
    { title: "Publicaciones en Foro", value: "876", icon: "forum", color: "#C3B1E1" },
  ];

  const metricsData = [
    { metric: "Usuarias Activas Mensuales (MAU)", value: "15,840", change: "+5.2%", trend: "Positiva" },
    { metric: "Tasa de Retención (Mes 1)", value: "42%", change: "-1.5%", trend: "Negativa" },
    { metric: "Artículos Educativos Leídos", value: "25,123", change: "+12.8%", trend: "Muy Positiva" },
    { metric: "Duración Promedio del Ciclo Registrado", value: "28.5 días", change: "+0.1 días", trend: "Estable" },
  ];

  return (
    <Box display="flex" minHeight="100vh" bgcolor="#f8f6f8">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <Box flex={1} p={4}>
        {/* Header */}
        <HeaderSection />

        {/* Controles de reporte */}
        <ReportControls />

        {/* Gráfico y estadísticas */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <DAUChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              {statsData.map((stat, idx) => (
                <Grid item xs={12} key={idx}>
                  <StatCard title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Tabla de métricas */}
        <Box mt={4}>
          <MetricsTable data={metricsData} />
        </Box>
      </Box>
    </Box>
  );
}