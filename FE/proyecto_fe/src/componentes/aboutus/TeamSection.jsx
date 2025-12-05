import { Box, Typography, Grow, Grid, Avatar, Paper } from "@mui/material";

const team = [
  { name: "María López", role: "CEO", img: "/images/person1.jpg" },
  { name: "Carlos Ruiz", role: "CTO", img: "/images/person2.jpg" },
  { name: "Ana Gómez", role: "Diseñadora", img: "/images/person3.jpg" },
];

export default function TeamSection() {
  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5}>
        Nuestro Equipo
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {team.map((person, index) => (
          <Grow in timeout={700 + index * 200} key={index}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  textAlign: "center",
                  borderRadius: 4,
                  p: 3,
                }}
              >
                <Avatar
                  src={person.img}
                  alt={person.name}
                  sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6">{person.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.role}
                </Typography>
              </Paper>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
}