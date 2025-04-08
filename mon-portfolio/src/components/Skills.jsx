import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiScrumalliance } from 'react-icons/si';
import { DiW3C } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GiTalk } from 'react-icons/gi';
import { BsGlobe } from 'react-icons/bs';

export default function Home() {
  const languages = [
    { name: 'HTML', icon: <FaHtml5 className="w-full h-full" />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt className="w-full h-full" />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs className="w-full h-full" />, color: 'text-yellow-400' },
    { name: 'PHP', icon: <FaPhp className="w-full h-full" />, color: 'text-purple-500' },
  ];

  const databases = [
    { name: 'MySQL', icon: <SiMysql className="w-full h-full" />, color: 'text-blue-600' },
  ];

  const frameworksAndTools = [
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-full h-full" />, color: 'text-cyan-400' },
    { name: 'React', icon: <FaReact className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNodeJs className="w-full h-full" />, color: 'text-green-500' },
    { name: 'Express', icon: <SiExpress className="w-full h-full" />, color: 'text-gray-500' },
    { name: 'GitHub', icon: <FaGithub className="w-full h-full" />, color: 'text-gray-800' },
    { name: 'VS Code', icon: <VscCode className="w-full h-full" />, color: 'text-blue-600' },
    { name: 'W3.CSS', icon: <DiW3C className="w-full h-full" />, color: 'text-teal-500' },
  ];

  const methodologies = [
    { name: 'Méthodologie Agile', icon: <SiScrumalliance className="w-full h-full" />, color: 'text-yellow-600' },
  ];

  const languagesSpoken = [
    { name: 'Français', icon: <GiTalk className="w-full h-full" />, color: 'text-blue-700', level: 'Langue courament' },
    { name: 'Anglais', icon: <BsGlobe className="w-full h-full" />, color: 'text-red-600', level: 'Intermédiaire' },
  ];

  return (
    <>
      <main className="min-h-screen">
        {/* Section Skills avec Aurore Boréale */}
        <section className="py-20 relative overflow-hidden bg-gray-900">
          {/* Effet Aurore Boréale */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Couche de fond étoilé */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            
            {/* Bandes d'aurore animées */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-[300%] h-[300%] animate-aurora-1 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(16,185,129,0.3)_70%)]"></div>
              </div>
              <div className="absolute top-0 left-0 w-[400%] h-[400%] animate-aurora-2 opacity-50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(139,92,246,0.3)_70%)]"></div>
              </div>
              <div className="absolute top-0 left-0 w-[500%] h-[500%] animate-aurora-3 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,182,212,0.3)_70%)]"></div>
              </div>
              <div className="absolute top-0 left-0 w-[600%] h-[600%] animate-aurora-4 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(236,72,153,0.3)_70%)]"></div>
              </div>
            </div>
            
            {/* Overlay pour assombrir légèrement */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900/90"></div>
          </div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            {/* Langages Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                Langages de Programmation
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Les langages que je maîtrise pour développer des applications web.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {languages.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                    <div className={`${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Bases de Données Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
                Bases de Données
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Systèmes de gestion de bases de données que j'utilise.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {databases.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                    <div className={`${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Frameworks & Outils Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
                Frameworks & Outils
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Les frameworks, bibliothèques et outils que j'utilise quotidiennement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {frameworksAndTools.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                    <div className={`${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500 transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Méthodologies Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-4">
                Méthodologies
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Méthodes de travail et gestion de projet que j'applique.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {methodologies.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                    <div className={`${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-600 transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Langues Parlées Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
                Langues Parlées
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Les langues que je parle et mon niveau de maîtrise.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {languagesSpoken.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                    <div className={`${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Autres sections de votre page sans effet d'aurore */}
        {/* <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-6xl">
            Autres contenus...
          </div>
        </section> */}
      </main>

      <style jsx global>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translateX(-25%) translateY(-10%) rotate(-5deg); }
          50% { transform: translateX(25%) translateY(10%) rotate(5deg); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translateX(-15%) translateY(5%) rotate(3deg); }
          50% { transform: translateX(15%) translateY(-5%) rotate(-3deg); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translateX(10%) translateY(-15%) rotate(7deg); }
          50% { transform: translateX(-10%) translateY(15%) rotate(-7deg); }
        }
        @keyframes aurora-4 {
          0%, 100% { transform: translateX(5%) translateY(20%) rotate(-2deg); }
          50% { transform: translateX(-5%) translateY(-20%) rotate(2deg); }
        }
        .animate-aurora-1 {
          animation: aurora-1 25s infinite ease-in-out;
        }
        .animate-aurora-2 {
          animation: aurora-2 30s infinite ease-in-out;
          animation-delay: 5s;
        }
        .animate-aurora-3 {
          animation: aurora-3 35s infinite ease-in-out;
          animation-delay: 10s;
        }
        .animate-aurora-4 {
          animation: aurora-4 40s infinite ease-in-out;
          animation-delay: 15s;
        }
      `}</style>
    </>
  );
}