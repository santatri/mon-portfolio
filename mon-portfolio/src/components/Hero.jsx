import React from 'react';
import profil from '../img/profil.jpeg';
import cv from '../cv/SANTATRINIAINA_Feno_Nasandratra_CV.pdf';

const floatingEmojis = [
  '💻', '🚀', '🔧', '📱', '🌐', '🖥️', '📊', '💾', '🧠', '⚙️', '🔌', 
  '📝', '🧩', '🎨', '🔍', '📚', '🔬', '💡', '📱', '🖱️', '⌨️', '🖨️',
  '🔋', '📶', '🔒', '🔓', '📡', '💿', '📀', '🕹️', '👨‍💻', '👩‍💻'
];

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV-SANTATRINIAINA_Feno_Nasandratra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 py-16 sm:px-6 md:py-24">
      {/* Floating Emojis Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, index) => {
          const animationStyle = {
            '--size': `${0.8 + Math.random() * 1.5}rem`,
            '--duration': `${10 + Math.random() * 20}s`,
            '--delay': `${Math.random() * 10}s`,
            '--left': `${Math.random() * 100}%`,
            '--opacity': 0.1 + Math.random() * 0.2,
            '--start-position': `${100 + Math.random() * 20}%`,
            '--rotation': `${Math.random() * 360}deg`,
          };
          
          return (
            <div 
              key={index}
              className="absolute text-2xl float-emoji"
              style={animationStyle}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          {/* Profile Image */}
          <div className="order-first mb-6 w-full flex justify-center md:mb-0 md:w-1/2">
            <div className="group relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
              <div className="absolute -inset-2 overflow-hidden rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/30 to-blue-600/20 opacity-70 animate-aurora-spin" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300/10 via-cyan-400/20 to-blue-500/10 opacity-60 animate-aurora-spin-reverse" />
              </div>
              <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-transparent transition-all duration-500 group-hover:border-cyan-400/30">
                <img 
                  src={profil}
                  alt="Photo de profil" 
                  className="h-full w-full object-cover object-center grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 overflow-hidden rounded-full opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-4 md:text-5xl">
              Bonjour, je suis <span className="bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">SANTATRINIAINA Feno Nasandratra</span>, Développeur
            </h1>
            <p className="mx-auto mb-6 max-w-lg text-base text-gray-300 sm:text-lg md:mx-0 md:mb-8 md:text-xl">
              Je crée des applications web modernes et réactives en utilisant React pour l'interface utilisateur, Tailwind CSS pour un design flexible et élégant, ainsi que Node.js et Express pour un backend puissant et rapide. Cette combinaison me permet de concevoir des solutions web performantes, sécurisées et faciles à maintenir, tout en offrant une expérience utilisateur fluide et agréable.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
              <a 
                href="/contact" 
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 px-5 py-2 text-sm font-medium text-gray-900 shadow-lg transition-all hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 hover:shadow-cyan-500/20 sm:px-6 sm:py-3 sm:text-base"
              >
                Me contacter
              </a>
              <a 
                href="/projects" 
                className="inline-flex justify-center rounded-lg border border-cyan-400/50 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm transition hover:border-cyan-300/70 hover:bg-cyan-500/10 hover:text-white sm:px-6 sm:py-3 sm:text-base"
              >
                Voir mes projets
              </a>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/50 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm transition hover:border-emerald-300/70 hover:bg-emerald-500/10 hover:text-white sm:px-6 sm:py-3 sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .float-emoji {
          left: var(--left);
          top: var(--start-position);
          font-size: var(--size);
          opacity: var(--opacity);
          animation: float var(--duration) linear infinite;
          animation-delay: var(--delay);
          transform: rotate(var(--rotation));
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes aurora-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes aurora-spin-reverse {
          0% { transform: rotate(360deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          100% { transform: rotate(0deg) scale(1.1); }
        }

        .animate-aurora-spin {
          animation: aurora-spin 20s linear infinite;
        }

        .animate-aurora-spin-reverse {
          animation: aurora-spin-reverse 25s linear infinite;
        }

        @media (max-width: 640px) {
          @keyframes float {
            100% { transform: translateY(-150vh) rotate(360deg); }
          }
        }
      `}</style>
    </section>
  );
}