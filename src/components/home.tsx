import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import GlobeSection from "./sections/GlobeSection";
import ExperienceSection from "./sections/ExperienceSection";
import CompetenciesSection from "./sections/CompetenciesSection";
import AchievementsSection from "./sections/AchievementsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="bg-navy-900 text-white">
      <Navbar transparent={true} />
      <HeroSection />
      <GlobeSection />
      <ExperienceSection />
      <CompetenciesSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
