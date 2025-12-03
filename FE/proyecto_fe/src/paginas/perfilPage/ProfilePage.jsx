import React from "react";
import { Container, Box, Typography } from "@mui/material";
import NavBar from "../../componentes/educacion/NavBar";
import ProfileHeader from "../../componentes/perfilComp/ProfileHeader";
import AccordionSection from "../../componentes/perfilComp/AccordionSection";
import PersonalInfo from "../../componentes/perfilComp/PersonalInfo";
import Preferences from "../../componentes/perfilComp/Preferences";
import PrivacySecurity from "../../componentes/perfilComp/PrivacySecurity";
import Footer from "../../componentes/homePage/Footer";

export default function ProfilePage() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>Mi Perfil</Typography>
        <ProfileHeader />

        <Box mt={4} display="flex" flexDirection="column" gap={2}>
          <AccordionSection title="Información Personal" defaultExpanded>
            <PersonalInfo />
          </AccordionSection>

          <AccordionSection title="Preferencias">
            <Preferences />
          </AccordionSection>

          <AccordionSection title="Privacidad y Seguridad">
            <PrivacySecurity />
          </AccordionSection>
        </Box>

      </Container>

      <Footer/>
    </>
  );
}