import React from 'react'
import profil from '../img/profil.jpeg'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texte et boutons */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">SANTATRINIAINA Feno Nasandratra un Développeur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Je crée des applications web modernes et réactives en utilisant React pour l'interface utilisateur, Tailwind CSS pour un design flexible et élégant, ainsi que Node.js et Express pour un backend puissant et rapide. Cette combinaison me permet de concevoir des solutions web performantes, sécurisées et faciles à maintenir, tout en offrant une expérience utilisateur fluide et agréable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 text-gray-900 font-medium px-6 py-3 rounded-lg hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                Me contacter
              </a>
              <a 
                href="/projects" 
                className="border border-cyan-400/50 text-cyan-300 font-medium px-6 py-3 rounded-lg hover:bg-cyan-500/10 hover:text-white transition backdrop-blur-sm hover:border-cyan-300/70"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          {/* Image de profil avec effet d'aurore intégré */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Image de profil */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent group-hover:border-cyan-400/30 transition-all duration-500 z-10">
                <img 
                  src={profil}
                  alt="Photo de profil" 
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Effet d'aurore boréale */}
              <div className="absolute -inset-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-500/30 to-blue-600/20 rounded-full animate-aurora-spin opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/10 via-cyan-400/20 to-blue-500/10 rounded-full animate-aurora-spin-reverse opacity-60"></div>
              </div>
              
              {/* Reflets */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx global>{`
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
      `}</style>
    </section>
  )
}