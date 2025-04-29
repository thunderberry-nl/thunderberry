
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsOverviewSection from '@/components/SkillsOverviewSection';
import OpenSourceSection from '@/components/OpenSourceSection';
import SponsorSection from '@/components/SponsorSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsOverviewSection />
      <OpenSourceSection />
      <SponsorSection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
