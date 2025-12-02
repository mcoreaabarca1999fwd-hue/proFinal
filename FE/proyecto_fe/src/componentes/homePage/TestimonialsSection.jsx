import { Box, Typography, Avatar } from "@mui/material";

const testimonials = [
  { name: "Lucía G.", since: "2022", text: "AlmaFloral ha cambiado la forma en que entiendo mi cuerpo. Las predicciones son increíblemente precisas y los consejos diarios me ayudan a sentirme mejor que nunca.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxG5K28NhCQBfm2l81cnxWkBiXm3MI6LxrLkUkcsjCJcSMaSU_HImq-YUySzXViO5SQWgaUWKXD5W8TyYBKebtD3tjaivHwaiz25itZqTzf6EukGV7U9ylDnZMsryYwBHgKQVn7hINr4HBF-VUnluKtYbhYKj3OujyINTKUDM7D7p2b4gFuiINgNzcVdyxv3sbHxLKIiz_zzsJS9L9yVGrsVBixFUbqyRroZ8772BUAWBquwKU4PsQymXrYTPwSNcqJnEAKB9mX1" },
  { name: "Sofía M.", since: "2023", text: "La sección de comunidad es mi lugar favorito. He conectado con personas maravillosas y me siento mucho menos sola en mis altibajos hormonales. ¡Gracias!", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDuHRNSJQ-turuMWXOK4oP1kjrQaXuw8mPkfovwZ17mJHRxO1F--mjfm6dyKFmAGw2sIHMHgpAsBCExGJukyc4REktrq1l9aKo1utkTzqDWxioB5I3xCl21gWq83IMrvT12B3_olbzgWqmqchmqtKkdJft2XWY-lKSINKf75At7pbdqQcSFrH_lYxaiqkWxVph0R8jVP_1d_IAkgMOuwuVuZ2G67q5rNBJhzp_342jzcrISD-MEUEVFlo3Ow5DgvEydAZ9lA4hqKG-" },
  { name: "Elena R.", since: "2021", text: "Los artículos son de altísima calidad. He aprendido tanto sobre salud femenina que nunca me enseñaron en ningún otro lugar. Es una herramienta educativa fundamental.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXl8uwTloyaXYlXpfNr95jBW0H9kWgIyy4Nj7fZUIUbjJ54lsmulYQcpA2NCxBDh5AQZQmf4ZQ0Tj04QELo9FGdiCi4P-R-tQ0eyszA5xU9RvqoCknw3UzizHw1rM4ydYm0Cc_mPf6IDmS_23ribdLL_WDOlGshUkGoENt3mEFufORYktgxh75CrYFLNL9ZPegyyuJeK6J7O3cTAVWLkM-YcD90dYVSMb2bZUKQcAyiu2GRbWomAT0UfDdJ22L-g7llqEL2BznUpjh" }
];

export default function TestimonialsSection() {
  return (
    <Box px={{ xs: 3, lg: 10 }} py={{ xs: 8, md: 24 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6} sx={{ color: "#333" }}>Lo que dicen nuestras usuarias</Typography>
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "repeat(3,1fr)" }} gap={4}>
        {testimonials.map((t, idx) => (
          <Box key={idx} p={3} borderRadius={2} border="1px solid rgba(0,0,0,0.1)" display="flex" flexDirection="column" gap={2} bgcolor="background.default">
            <Typography color="text.secondary">{t.text}</Typography>
            <Box display="flex" alignItems="center" gap={2} mt="auto">
              <Avatar src={t.img} />
              <Box>
                <Typography fontWeight="bold">{t.name}</Typography>
                <Typography variant="body2" color="text.secondary">Usuaria desde {t.since}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}