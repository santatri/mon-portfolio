import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 100;
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800/60'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-5 sm:px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo('accueil')}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 hover:opacity-90 transition-opacity"
        >
          .Santatriniaina
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${activeSection === link.id
                  ? 'text-white bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-900/98 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out z-40 border-r border-gray-800/60 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-5 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left block px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === link.id
                  ? 'text-white bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 border border-cyan-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}