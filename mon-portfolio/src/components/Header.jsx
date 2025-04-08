import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour fermer le menu mobile après un clic
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 dark:from-emerald-300 dark:via-cyan-400 dark:to-blue-500"
            onClick={closeMobileMenu}
          >
            .Santatriniaina
          </NavLink>
          
          <div className="flex items-center space-x-6">
            {/* Menu Desktop - Caché sur mobile */}
            <div className="hidden md:flex space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400'
                  }`
                }
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-blue-500/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400'
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
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
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
                      : 'text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              À propos
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
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
                    : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}