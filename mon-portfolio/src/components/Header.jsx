import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHome, FaUser, FaBriefcase, FaBolt, FaRocket } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const navLinks = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'À propos', id: 'apropos' },
  { label: 'Expérience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projets', id: 'projets' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      const offset = window.scrollY;
      setScrolled(offset > 20);

      // Scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);

      // Active section detection
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = offset + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
        }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 transition-all duration-150 ease-out z-50" 
           style={{ width: `${scrollProgress}%` }} />

      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo('accueil')}
          className="group flex items-center gap-3"
        >
          <div className={`rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20 transition-all duration-500 group-hover:rotate-[360deg] ${scrolled ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'}`}>
            S
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className={`font-black tracking-tighter text-white transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>SANTATRI</span>
            <span className={`text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase transition-all duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto mt-1'}`}>Portfolio</span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative group overflow-hidden ${activeSection === link.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              <span className="relative z-10">{link.label}</span>
              {activeSection === link.id && (
                <div className="absolute inset-0 bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] z-0" />
              )}
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('contact')}
            className={`hidden md:flex items-center justify-center rounded-xl bg-white text-gray-950 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-xl shadow-white/5 ${scrolled ? 'px-5 py-2' : 'px-7 py-3'}`}
          >
            Contact
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-all active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-950/60 backdrop-blur-sm z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu Content */}
      <div
        className={`md:hidden fixed inset-x-4 top-24 bg-gray-950 border border-white/10 shadow-2xl p-6 transition-all duration-500 origin-top z-50 rounded-[2.5rem] ${isMobileMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="grid grid-cols-2 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`flex flex-col items-center justify-center h-24 rounded-3xl text-[10px] font-black tracking-widest uppercase transition-all gap-2 ${activeSection === link.id
                  ? 'text-white bg-indigo-600 border border-indigo-500 shadow-xl shadow-indigo-500/20'
                  : 'text-gray-400 bg-white/5 border border-white/5'
                }`}
            >
              <span className="text-lg opacity-50">
                {link.id === 'accueil' && <FaHome />}
                {link.id === 'apropos' && <FaUser />}
                {link.id === 'experience' && <FaBriefcase />}
                {link.id === 'skills' && <FaBolt />}
                {link.id === 'projets' && <FaRocket />}
                {link.id === 'contact' && <FiMail />}
              </span>
              {link.label}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => scrollTo('contact')}
          className="w-full mt-6 py-4 rounded-2xl bg-white text-gray-950 text-xs font-black uppercase tracking-widest shadow-xl"
        >
          Me Contacter
        </button>
      </div>
    </header>
  );
}