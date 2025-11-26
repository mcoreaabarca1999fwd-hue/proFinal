import React from "react";
import TopNavBar from "../../componentes/homePage/TopNavBar";
import HeroSection from "../../componentes/homePage/HeroSection";
import FeaturesSection from "../../componentes/homePage/FeaturesSection";
import CommunitySection from "../../componentes/homePage/CommunitySection";
import TestimonialsSection from "../../componentes/homePage/TestimonialsSection";
import CTASection from "../../componentes/homePage/CTASection";
import Footer from "../../componentes/homePage/Footer";

export default function LandingPage() {
  return (
    <div>
      <TopNavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}