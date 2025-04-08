import React from 'react';
import profil from '../img/profil.jpeg';
import cv from '../cv/SANTATRINIAINA_Feno_Nasandratra_CV.pdf';

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
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto">
        {/* Conteneur principal avec ordre inversé sur mobile */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Image de profil - en premier sur mobile */}
          <div className="w-full md:w-1/2 flex justify-center order-first mb-6 md:mb-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 group">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent group-hover:border-cyan-400/30 transition-all duration-500 z-10">
                <img 
                  src={profil}
                  alt="Photo de profil" 
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -inset-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-500/30 to-blue-600/20 rounded-full animate-aurora-spin opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/10 via-cyan-400/20 to-blue-500/10 rounded-full animate-aurora-spin-reverse opacity-60"></div>
              </div>
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"></div>
              </div>
            </div>
          </div>

          {/* Texte et boutons - en dessous sur mobile */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">SANTATRINIAINA Feno Nasandratra</span>, Développeur
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            Je crée des applications web modernes et réactives en utilisant React pour l'interface utilisateur, Tailwind CSS pour un design flexible et élégant, ainsi que Node.js et Express pour un backend puissant et rapide. Cette combinaison me permet de concevoir des solutions web performantes, sécurisées et faciles à maintenir, tout en offrant une expérience utilisateur fluide et agréable.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a 
                href="/contact" 
                className="inline-flex justify-center bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 text-gray-900 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20 text-sm sm:text-base"
              >
                Me contacter
              </a>
              <a 
                href="/projects" 
                className="inline-flex justify-center border border-cyan-400/50 text-cyan-300 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-cyan-500/10 hover:text-white transition backdrop-blur-sm hover:border-cyan-300/70 text-sm sm:text-base"
              >
                Voir mes projets
              </a>
              <button
                onClick={handleDownloadCV}
                className="inline-flex justify-center items-center gap-2 border border-emerald-400/50 text-emerald-300 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-emerald-500/10 hover:text-white transition backdrop-blur-sm hover:border-emerald-300/70 text-sm sm:text-base"
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

      <style dangerouslySetInnerHTML={{
        __html: `
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
          animation: aurora-spin 20s infinite linear;
        }
        .animate-aurora-spin-reverse {
          animation: aurora-spin-reverse 25s infinite linear;
        }
      `
      }} />
    </section>
  );
}