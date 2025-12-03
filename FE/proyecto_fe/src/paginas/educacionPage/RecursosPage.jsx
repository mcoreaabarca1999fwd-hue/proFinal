import React from "react";
import { Box, Grid, Button } from "@mui/material";
import NavBar from "../../componentes/educacion/NavBar";
import SearchBar from "../../componentes/educacion/SearchBar";
import CategoryChips from "../../componentes/educacion/CategoryChips";
import FeaturedCard from "../../componentes/educacion/FeaturedCard";
import ResourceCard from "../../componentes/educacion/ResourceCard";
import SectionTitle from "../../componentes/educacion/SectionTitle";
import Footer from "../../componentes/homePage/Footer";

export default function RecursosPage() {
  const resources = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DW7zCvoLVh2OOHSBCg6M2DGwmrsDtwnvgjs93yT5NGwIQsANBq6jQ_3PtqS9wXPWAJL8qpmjW6X9AydXpROL9RY3jznqWjUVgLcafGQmkOHzviI4yXranC61aXxkVX5wzOke6Pa0OWWI-ITNzBKfHXMPKN-k0JnLFxb-w2lK7-AoFgQvGUr53FwmlKdbjmnE6HVsw_Wt0EjaD9t-4vrI39oXitfrvL4V2Y6oYTsXhG2x6vqie9M6bF1dKJqR6sAFvwwEp7T7OYNU",
      tag: "ARTÍCULO",
      title: "¿Qué es el Síndrome Premenstrual (SPM)?",
      description: "Descubre los síntomas más comunes y aprende a manejarlos para sentirte mejor.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNetDDsGAamSq2BFgpBdBLe2GXyNxtH1EHmGDhy_p3TXzVHsxmR9LQFYF7r4SYcK5cd483f2uNnxPH_8mc1BQzXBB38zcsri_P2ijPQ8l4zbGGvmosqV7aBWqUqmRQf509RyowifCHXT68Si2yqneqz8QsxRyx7Q20uNy4A2REaj8wt4EubogQCrN6iyIv7P3SilAw991HHHgpRGsij_8oXOxlgXnTF7DsZzth9U_IEinPu6q0egIqml4qevdf6RngRMGWvHQ_vaZG",
      tag: "VIDEO",
      title: "Yoga para Aliviar Cólicos Menstruales",
      description: "Sigue esta rutina de 15 minutos para relajar tu cuerpo y mente durante la menstruación.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC3YjoUy1zDq8EjL7LrV5Sxe_rU_IiakyG_gNXOuSdieN2J-G4VPRglIyv8bDoKxaeBxQS03Q5OlkeOtHgsZQCbnYGKd3AynE4Q8RHdI7dL4tQAOr9H6PZwSVgYljbtGGGUeR7crfflAP2T_Whyw41GleYJSDZ1zobHegjN73IizY-Fgh4sGs9NW8RH2Y7aJr8MR40Zbkg2gRfzy1_UmTfjmThSp3NGXgpX6OzJdYUrbBijPtf97P0eb-mf1mzuld1ciLoaDaWDsVpl",
      tag: "BIENESTAR",
      title: "Nutrición: Alimentos para tu Ciclo",
      description: "Conoce qué comer en cada fase de tu ciclo para balancear tus hormonas naturalmente.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATt7V4gf4prPZ6Q-91IR5DlszESGrb_gQz-zxBs6ooTvkO_odSIQpy0zaubs96OA3bZsgcgpaf5Grt8nQp4cJszSk9i2HrOJXLvczd_J3BIWEvi1poOW6srt5UGXeMp984s-FS--fBpVXUrSrzoLcDH17umvL8aJ0XXBuq8PsHrXr0kwS-QAkjJpDHSkjL8YL65K4gNV61CMvoC4Mgl-h4ZdxsmX4QSUohNAFhDp8A-ne0tOew7DQ_KB971BRj6vJx-dE63YDIfFOZ",
      tag: "SALUD SEXUAL",
      title: "Métodos Anticonceptivos Modernos",
      description: "Una guía actualizada sobre las opciones disponibles para que elijas la mejor para ti.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDL7fSKqyFsHRAaq7sKtInvTCp8RDtvIig-F7vqAzarc7H36PArKd30IJhKhtNkulDvAMx6UaufLaHqYaNEq24T6DuUdhH3axWmoM2I2Je6Riq5xQfqHsLukVPHcJkz4eQoRqEGg1E6HKoiifp8OzNke-nYCR8ctFWPv47ZcJfFG8q28OByM-icUyM_KAzHvryj7Q7HnDulTMTEJoNJOi_Vtbvx_bPl_TSK83L63Q6-NGe4AvfP_9xIXkpx421ivNUM5l4zcew2GP0G",
      tag: "BIENESTAR",
      title: "Ejercicio y Ciclo Menstrual",
      description: "Aprende a adaptar tus rutinas de ejercicio a cada fase de tu ciclo para mejores resultados.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkq029vKuaAEIfy1gW0gFkoZnHn1YFBxAio_UQuUCjrh1CksVpZApbi6JUiQ8xONMLTxlkwPzP2XgqBLBsXBq8it1RuvNREzEz0x6VhHHI-O67V6QRTn3YN1k1K_XYGObGn1d9VjSAaouG0LBUI1rmOYEbqWS9SNlYbgFSQiBd28i7AJQpo_2Wc5nJUwQP301pxwSNg2ODMeUwVqoXzPXied5-aPo1Gxi9bY6rn9OVHiS9LxwuIMONRYXTH1QqhFSGgL4BtEMcwg-T",
      tag: "FERTILIDAD",
      title: "¿Cómo Identificar tus Días Fértiles?",
      description: "Descubre los métodos naturales y tecnológicos para conocer tu ventana de fertilidad.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8f6f7", minHeight: "100vh" }}>
      <NavBar />
      <SearchBar />
      <CategoryChips />
      <FeaturedCard />
      <SectionTitle>Todos los Recursos</SectionTitle>

      <Box sx={{ px: { xs: 2, md: 6, lg: 10 }, pb: 6 }}>
        <Grid container spacing={3}>
          {resources.map((r, i) => (
            <Grid item xs={12} sm={6} lg={4} key={i}>
              <ResourceCard {...r} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", pt: 6 }}>
          <Button sx={{ bgcolor: "#f4f0f3", color: "#333", borderRadius: 2, px: 4 }}>
            Cargar más recursos
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}