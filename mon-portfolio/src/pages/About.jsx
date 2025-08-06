import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiTypescript, SiJavascript, SiAngular, SiSymfony } from 'react-icons/si';
import { MdSchool, MdCode, MdEmail, MdLocationOn, MdCake } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const floatingTechIcons = [
  <FaReact className="text-cyan-400" />,
  <SiTailwindcss className="text-cyan-300" />,
  <FaNodeJs className="text-emerald-500" />,
  <SiTypescript className="text-blue-400" />,
  <SiJavascript className="text-yellow-400" />,
  <SiAngular className="text-red-500" />,
  <SiSymfony className="text-gray-300" />,
  <SiExpress className="text-gray-400" />,
  <SiMysql className="text-orange-500" />,
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden pt-24 md:pt-28 pb-16 px-4 sm:px-6">
        {/* Animated Tech Icons Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {floatingTechIcons.map((Icon, index) => {
            const size = 1 + Math.random() * 2;
            const duration = 30 + Math.random() * 40;
            const delay = Math.random() * 20;
            const opacity = 0.05 + Math.random() * 0.15;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const rotation = Math.random() * 360;
            
            return (
              <div 
                key={index}
                className="absolute text-xl sm:text-2xl tech-icon-float"
                style={{
                  '--size': `${size}rem`,
                  '--duration': `${duration}s`,
                  '--delay': `${delay}s`,
                  '--opacity': opacity,
                  '--rotation': `${rotation}deg`,
                  '--start-x': `${startX}%`,
                  '--start-y': `${startY}%`,
                  left: `${startX}%`,
                  top: `${startY}%`,
                }}
              >
                {Icon}
              </div>
            );
          })}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-3 md:mb-4 animate-gradient">
              À propos de moi
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Développeur Full Stack passionné par la création d'applications web modernes et performantes.
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-4 md:mt-6 animate-pulse"></div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Personal Info Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 md:mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 animate-gradient">
                    SANTATRINIAINA Feno Nasandratra
                  </span>
                </h2>
                
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all">
                    <MdLocationOn className="text-xl sm:text-2xl text-cyan-400 mr-2 sm:mr-3" />
                    <div>
                      <p className="text-xs text-gray-400">Localisation</p>
                      <p className="text-sm sm:text-base text-gray-200">Antananarivo, Madagascar</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald-400/30 transition-all">
                    <MdCake className="text-xl sm:text-2xl text-emerald-400 mr-2 sm:mr-3" />
                    <div>
                      <p className="text-xs text-gray-400">Date de naissance</p>
                      <p className="text-sm sm:text-base text-gray-200">04 Mars 2002</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-400/30 transition-all">
                    <MdEmail className="text-xl sm:text-2xl text-blue-400 mr-2 sm:mr-3" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-sm sm:text-base text-gray-200">santatriniainafeno01@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-400/30 transition-all">
                    <MdSchool className="text-xl sm:text-2xl text-purple-400 mr-2 sm:mr-3" />
                    <div>
                      <p className="text-xs text-gray-400">Éducation</p>
                      <p className="text-sm sm:text-base text-gray-200">ISPM - IGGLIA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 text-cyan-400 mb-3 sm:mb-4">
                  <MdSchool className="text-xl sm:text-2xl" />
                  <h3 className="text-lg sm:text-xl font-medium">Formation académique</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Étudiant en <span className="text-emerald-300 font-medium">Informatique de gestion - Génie Logiciel et Intelligence Artificielle</span> à l'Institut Supérieur Polytechnique de Madagascar (ISPM)
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-400">
                  <span className="h-1 w-1 bg-gray-500 rounded-full mr-2"></span>
                  <span>2021 - Présent</span>
                </div>
              </div>
              
              {/* Expertise */}
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 text-cyan-400 mb-3 sm:mb-4">
                  <MdCode className="text-xl sm:text-2xl" />
                  <h3 className="text-lg sm:text-xl font-medium">Domaines d'expertise</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start group">
                    <span className="text-emerald-400 mr-2 sm:mr-3 text-lg group-hover:text-cyan-400 transition-all">▹</span>
                    <span className="group-hover:text-white transition-all">Développement Frontend avec React.js et/ou Angular</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-emerald-400 mr-2 sm:mr-3 text-lg group-hover:text-cyan-400 transition-all">▹</span>
                    <span className="group-hover:text-white transition-all">Développement Backend avec Node.js/Express et Symfony</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-emerald-400 mr-2 sm:mr-3 text-lg group-hover:text-cyan-400 transition-all">▹</span>
                    <span className="group-hover:text-white transition-all">Conception UI/UX avec Tailwind CSS</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-emerald-400 mr-2 sm:mr-3 text-lg group-hover:text-cyan-400 transition-all">▹</span>
                    <span className="group-hover:text-white transition-all">Architecture des bases de données relationnelles</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Skills Tags */}
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Compétences Techniques
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-200 transition-all text-sm sm:text-base">
                    <FaReact className="text-lg sm:text-xl" />
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-200 transition-all text-sm sm:text-base">
                    <SiTailwindcss className="text-lg sm:text-xl" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-green-500 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/40 hover:text-green-300 transition-all text-sm sm:text-base">
                    <FaNodeJs className="text-lg sm:text-xl" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-gray-300 border border-gray-600/20 hover:bg-gray-700/50 hover:border-gray-500/40 transition-all text-sm sm:text-base">
                    <SiExpress className="text-lg sm:text-xl" />
                    <span>Express</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-blue-400 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 hover:text-blue-300 transition-all text-sm sm:text-base">
                    <SiTypescript className="text-lg sm:text-xl" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/10 hover:border-yellow-500/40 hover:text-yellow-300 transition-all text-sm sm:text-base">
                    <SiJavascript className="text-lg sm:text-xl" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-orange-500 border border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40 hover:text-orange-300 transition-all text-sm sm:text-base">
                    <SiMysql className="text-lg sm:text-xl" />
                    <span>MySQL</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-gray-300 border border-gray-600/20 hover:bg-gray-700/50 hover:border-gray-500/40 transition-all text-sm sm:text-base">
                    <SiSymfony className="text-lg sm:text-xl" />
                    <span>Symfony</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-800/50 text-red-500 border border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-300 transition-all text-sm sm:text-base">
                    <SiAngular className="text-lg sm:text-xl" />
                    <span>Angular</span>
                  </div>
                </div>
              </div>
              
              {/* About Me */}
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Qui suis-je ?
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-gray-300">
                  <p>
                    Passionné par le développement web depuis mes études, je me spécialise dans la création d'applications full stack performantes et esthétiques.
                  </p>
                  <p>
                    Mon parcours à l'ISPM m'a permis d'acquérir des compétences solides en génie logiciel tout en développant une approche pratique grâce à divers projets personnels et académiques.
                  </p>
                  <p>
                    Je m'intéresse particulièrement aux architectures modernes, aux bonnes pratiques de développement et à l'expérience utilisateur.
                  </p>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="p-6 sm:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4 flex items-center">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Travaillons ensemble
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter pour discuter de comment je pourrais vous aider.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <NavLink 
                    to="/contact" 
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-emerald-500 hover:to-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/30 text-sm sm:text-base group"
                  >
                    <span className="group-hover:scale-105 transition-transform">Contactez-moi</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .tech-icon-float {
          font-size: var(--size);
          opacity: var(--opacity);
          animation: float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          transform: rotate(var(--rotation));
        }

        @keyframes float {
          0% {
            transform: 
              translate(0, 0) 
              rotate(var(--rotation));
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: 
              translate(
                calc((var(--start-x) - 50) * 1vw), 
                calc((var(--start-y) - 50) * 1vh)
              ) 
              rotate(calc(var(--rotation) + 360deg));
            opacity: 0;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          @keyframes float {
            100% {
              transform: 
                translate(
                  calc((var(--start-x) - 50) * 1.5vw), 
                  calc((var(--start-y) - 50) * 1.5vh)
                ) 
                rotate(calc(var(--rotation) + 360deg));
            }
          }
        }
      `}</style>
    </>
  );
}