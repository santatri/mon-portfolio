import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profil from '../img/profil.jpeg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql } from 'react-icons/si';
import { MdSchool, MdCode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

// Emojis techniques et créatifs pour le fond
const floatingEmojis = [
  '💻', '🚀', '🔧', '📱', '🌐', '🖥️', '📊', '💾', '🧠', '⚙️', '🔌', 
  '📝', '🧩', '🎨', '🔍', '👨‍💻', '👩‍💻', '🤖', '💡', '🛠️', '🔨', '📚',
  '🔬', '🧪', '📱', '⌨️', '🖱️', '💽', '📀', '🖨️', '📡', '🔋', '📶',
  '🔢', '🔤', '🔣', '🎯', '✨', '🌟', '💫', '🪐', '🧑‍🚀', '👨‍💼', '👩‍💼'
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden pt-28 pb-20 px-4 sm:px-6">
        {/* Animated Emoji Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {floatingEmojis.map((emoji, index) => {
            const size = 0.8 + Math.random() * 1.5;
            const duration = 15 + Math.random() * 25;
            const delay = Math.random() * 15;
            const opacity = 0.1 + Math.random() * 0.3;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const rotation = Math.random() * 360;
            
            // Random direction (0-3)
            const direction = Math.floor(Math.random() * 4);
            
            return (
              <div 
                key={index}
                className="absolute text-2xl emoji-float"
                style={{
                  '--size': `${size}rem`,
                  '--duration': `${duration}s`,
                  '--delay': `${delay}s`,
                  '--opacity': opacity,
                  '--rotation': `${rotation}deg`,
                  '--start-x': `${startX}%`,
                  '--start-y': `${startY}%`,
                  '--direction': direction,
                  left: `${startX}%`,
                  top: `${startY}%`,
                }}
              >
                {emoji}
              </div>
            );
          })}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
              À propos de moi
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 group">
                <div className="absolute inset-0 rounded-3xl border-4 border-cyan-400/30 transform rotate-6 transition-transform duration-500 group-hover:rotate-3"></div>
                <div className="absolute inset-0 rounded-3xl border-4 border-emerald-400/20 transform -rotate-6 transition-transform duration-500 group-hover:-rotate-3"></div>
                <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl border-4 border-gray-700 transition-all duration-300 group-hover:border-cyan-400/50">
                  <img 
                    src={profil} 
                    alt="Photo de profil" 
                    className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-400/10 via-cyan-500/20 to-blue-600/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-semibold text-white mb-2">
                  Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">SANTATRINIAINA Feno Nasandratra</span>
                </h2>
                <p className="text-lg text-gray-300">
                  Développeur Full Stack passionné par les technologies web modernes.
                </p>
                
                {/* Nouvelles informations personnelles */}
                <div className="mt-4 space-y-2 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Né le 04 Mars 2002 à Antanifotsy</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Résidant actuellement à Antananarivo</span>
                  </div>
                </div>
              </div>
              
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-cyan-300 border border-cyan-500/20">
                  <FaReact className="text-xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-cyan-400 border border-cyan-500/20">
                  <SiTailwindcss className="text-xl" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-green-500 border border-green-500/20">
                  <FaNodeJs className="text-xl" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-gray-300 border border-gray-600/20">
                  <SiExpress className="text-xl" />
                  <span>Express</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-orange-500 border border-orange-500/20">
                  <SiMysql className="text-xl" />
                  <span>MySQL</span>
                </div>
              </div>
              
              {/* Education */}
              <div className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-cyan-400 mb-3">
                  <MdSchool className="text-2xl" />
                  <h3 className="text-xl font-medium">Formation académique</h3>
                </div>
                <p className="text-gray-300">
                  Étudiant en <span className="text-emerald-300 font-medium">Informatique de gestion - Génie Logiciel et Intelligence Artificielle</span> à l'Institut Supérieur Polytechnique de Madagascar (ISPM)
                </p>
              </div>
              
              {/* Expertise */}
              <div className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-cyan-400 mb-3">
                  <MdCode className="text-2xl" />
                  <h3 className="text-xl font-medium">Domaines d'expertise</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 text-lg">▹</span>
                    <span>Développement Frontend (React.js)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 text-lg">▹</span>
                    <span>Développement Backend (Node.js, Express)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 text-lg">▹</span>
                    <span>Conception d'interfaces utilisateur (Tailwind CSS)</span>
                  </li>
                </ul>
              </div>
              
              {/* Contact Button */}
              <div className="pt-4">
              <NavLink 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 text-gray-900 font-medium px-8 py-3 rounded-lg hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20 text-lg"
                >
                  Contactez-moi
                  </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        .emoji-float {
          font-size: var(--size);
          opacity: var(--opacity);
          animation: float var(--duration) linear infinite;
          animation-delay: var(--delay);
          transform: rotate(var(--rotation));
        }

        @keyframes float {
          0% {
            transform: 
              translateX(0) 
              translateY(0) 
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
              translateX(calc(var(--direction) === 0 ? 0 : 
                          var(--direction) === 1 ? -100vw : 
                          var(--direction) === 2 ? 0 : 100vw)) 
              translateY(calc(var(--direction) === 0 ? 100vh : 
                          var(--direction) === 1 ? 0 : 
                          var(--direction) === 2 ? -100vh : 0)) 
              rotate(calc(var(--rotation) + 360deg));
            opacity: 0;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          @keyframes float {
            100% {
              transform: 
                translateX(calc(var(--direction) === 0 ? 0 : 
                            var(--direction) === 1 ? -150vw : 
                            var(--direction) === 2 ? 0 : 150vw)) 
                translateY(calc(var(--direction) === 0 ? 150vh : 
                            var(--direction) === 1 ? 0 : 
                            var(--direction) === 2 ? -150vh : 0)) 
                rotate(calc(var(--rotation) + 360deg));
            }
          }
        }
      `}</style>
    </>
  );
}