import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-black/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full z-50 h-16 transition-all duration-300">
      <nav className="container mx-auto px-6 py-3 h-full">
        <div className="flex justify-between items-center h-full">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 dark:from-emerald-300 dark:via-cyan-400 dark:to-blue-500"
            onClick={closeMobileMenu}
          >
            .Santatriniaina
          </NavLink>
          
          <div className="flex items-center space-x-6">
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/Skills" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                Skills
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                À propos
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-indigo-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                Projets
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg shadow-purple-500/20'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile - Version latérale */}
        <div className={`md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-1/2 bg-black/90 dark:bg-gray-900/95 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all mb-3 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/Skills" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all mb-3 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all mb-3 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              À propos
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all mb-3 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Projets
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Overlay semi-transparent */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/70 z-30 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </nav>
    </header>
  );
}