import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import RevealOnScroll from './components/RevealOnScroll';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import InterventionSection from './sections/InterventionSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function MainPage() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <RevealOnScroll><AboutSection /></RevealOnScroll>
        <RevealOnScroll><ExperienceSection /></RevealOnScroll>
        <RevealOnScroll><SkillsSection /></RevealOnScroll>
        <RevealOnScroll><InterventionSection /></RevealOnScroll>
        <RevealOnScroll><ServicesSection /></RevealOnScroll>
        <RevealOnScroll><ProjectsSection /></RevealOnScroll>
        <RevealOnScroll><ContactSection /></RevealOnScroll>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}