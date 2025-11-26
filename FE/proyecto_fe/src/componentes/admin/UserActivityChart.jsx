import { Card, CardContent, Typography } from "@mui/material";

export default function UserActivityChart() {
  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h6">Actividad de Usuarios (Últimos 7 días)</Typography>

        <svg fill="none" width="100%" height="150" viewBox="0 0 475 150">
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
            fill="rgba(195,25,230,0.2)"
          />
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21..."
            stroke="#c319e6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </CardContent>
    </Card>
  );
}