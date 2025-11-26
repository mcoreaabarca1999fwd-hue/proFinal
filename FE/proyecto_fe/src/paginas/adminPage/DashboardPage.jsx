import { Box, Grid } from "@mui/material";
import Sidebar from "../../componentes/admin/Sidebar";
import StatsCards from "../../componentes/admin/StatsCards";
import ContentTable from "../../componentes/admin/ContentTable";
import UserActivityChart from "../../componentes/admin/UserActivityChart";
import ModerationList from "../../componentes/admin/ModerationList";
import RecentActivity from "../../componentes/admin/RecentActivity";

export default function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />

      <Box flex={1} p={4}>
        <StatsCards />

        <ContentTable />

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} lg={8}>
            <UserActivityChart />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} lg={8}>
            <ModerationList />
          </Grid>

          <Grid item xs={12} lg={4}>
            <RecentActivity />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}