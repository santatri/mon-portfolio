import { useEffect } from 'react'; // Ajoutez useEffect

import Header from '../components/Header'
import Footer from '../components/Footer'
import profil from '../img/profil.jpeg'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiExpress,SiMysql } from 'react-icons/si'
import { MdSchool, MdCode } from 'react-icons/md'

export default function About() {
   // Ajoutez cet effet pour scroller en haut lorsque le composant est monté
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-12">
            À propos de moi
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Nouveau design pour la photo */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400/30 transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border-4 border-emerald-400/20 transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500"></div>
                <img 
                  src={profil} 
                  alt="Photo de profil" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300"
                />
                <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400/10 via-cyan-500/20 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Je suis un <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">Développeur Full Stack</span>
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-cyan-300 bg-gray-800/50 px-3 py-1 rounded-full">
                  <FaReact className="text-xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 bg-gray-800/50 px-3 py-1 rounded-full">
                  <SiTailwindcss className="text-xl" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 text-green-500 bg-gray-800/50 px-3 py-1 rounded-full">
                  <FaNodeJs className="text-xl" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full">
                  <SiExpress className="text-xl" />
                  <span>Express</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500 bg-gray-800/50 px-3 py-1 rounded-full">
                  <SiMysql className="text-xl"    />
                  <span>Mysql</span>
                </div>
              </div>
              
              {/* Section éducation */}
              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                  <MdSchool className="text-xl" />
                  <h3 className="font-medium">Formation académique</h3>
                </div>
                <p className="text-gray-300">
                  Étudiant en <span className="text-emerald-300">Informatique de gestion - Génie Logiciel et Intelligence Artificielle</span> à l'Institut Supérieur Polytechnique de Madagascar (ISPM)
                </p>
              </div>
              
              <p className="text-lg text-gray-300">
                Passionné par le développement web  depuis plusieurs années, je crée des applications modernes avec les dernières technologies.
              </p>
              
              {/* Section compétences */}
              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                  <MdCode className="text-xl" />
                  <h3 className="font-medium">Domaines d'expertise</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span>Développement Frontend (React.js)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span>Développement Backend (Node.js, Express)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span>Conception d'interfaces utilisateur (Tailwind CSS)</span>
                  </li>
                 
                </ul>
              </div>
              
              <div className="pt-2">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 text-gray-900 font-medium px-6 py-3 rounded-lg hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                  Contactez-moi
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}