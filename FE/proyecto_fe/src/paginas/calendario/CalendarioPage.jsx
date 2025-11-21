import { Grid, Box, Typography } from "@mui/material";
import LayoutContainer from "../../componentes/calendarioCiclo/LayoutContainer";
import CalendarCycle from "../../componentes/calendarioCiclo/CalendarCycle";
import StatsReport from "../../componentes/calendarioCiclo/StatsReport";
import DayOverview from "../../componentes/calendarioCiclo/DayOverview";
import Predictions from "../../componentes/calendarioCiclo/Predictions";
import HealthTips from "../../componentes/calendarioCiclo/HealthTips";
import Header from "../../componentes/calendarioCiclo/Header";


export default function Dashboard() {
  return (
    <LayoutContainer>

      <Header />

      <Box mt={4} mb={3}>
        <Typography variant="h4" fontWeight="bold">Hola, María</Typography>
        <Typography color="var(--medium-gray)">
          Aquí está tu resumen del ciclo para hoy, 15 de junio.
        </Typography>
      </Box>

      <Grid container spacing={4}>

        {/* LEFT column */}
        <Grid item xs={12} md={8} display="flex" flexDirection="column" gap={4}>

          <CalendarCycle />
          <StatsReport />

        </Grid>

        {/* RIGHT column */}
        <Grid item xs={12} md={4} display="flex" flexDirection="column" gap={4}>

          <DayOverview />
          <Predictions />
          <HealthTips />

        </Grid>

      </Grid>

    </LayoutContainer>
  );
}
