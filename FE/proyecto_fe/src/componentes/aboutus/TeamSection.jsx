import { Box, Typography, Grow, Grid, Avatar, Paper } from "@mui/material";

const team = [
  { name: "Molishka Corea", role: "CEO", img: "/images/person1.jpg" },
  { name: "Ana Gómez", role: "CTO", img: "/images/person2.jpg" },
];

export default function TeamSection() {
  return (
    <Box sx={{ py: 8, px: 3, bgcolor: "#fafafa" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
        sx={{ color: "var(--primary-dark)" }}
      >
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
                  p: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    bgcolor: "#fff",
                  },
                }}
              >
                <Avatar
                  src={person.img}
                  alt={person.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    border: "4px solid var(--soft-blush)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#181115" }}>
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
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