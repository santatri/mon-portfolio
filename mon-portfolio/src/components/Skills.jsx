import { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiScrumalliance } from 'react-icons/si';
import { DiW3C } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GiTalk } from 'react-icons/gi';
import { BsGlobe } from 'react-icons/bs';
import Header from './Header';
import Footer from './Footer';

const floatingEmojis = ['💻', '🚀', '🎯', '✨', '👨‍💻', '📱', '🔧', '📊', '🌐', '💡', '🖥️', '🔌', '📝', '🧩', '⚙️'];

export default function Home() {
  const skills = {
    languages: {
      title: "Langages de Programmation",
      subtitle: "Les langages que je maîtrise pour développer des applications web.",
      gradient: "from-emerald-300 via-cyan-400 to-blue-500",
      items: [
        { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500' },
      ]
    },
    databases: {
      title: "Bases de Données",
      subtitle: "Systèmes de gestion de bases de données que j'utilise.",
      gradient: "from-amber-400 to-orange-500",
      items: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
      ]
    },
    frameworks: {
      title: "Frameworks & Outils",
      subtitle: "Les frameworks, bibliothèques et outils que j'utilise quotidiennement.",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      items: [
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
        { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800' },
        { name: 'VS Code', icon: <VscCode />, color: 'text-blue-600' },
        { name: 'W3.CSS', icon: <DiW3C />, color: 'text-teal-500' },
      ]
    },
    methodologies: {
      title: "Méthodologies",
      subtitle: "Méthodes de travail et gestion de projet que j'applique.",
      gradient: "from-green-400 to-blue-600",
      items: [
        { name: 'Méthodologie Agile', icon: <SiScrumalliance />, color: 'text-yellow-600' },
      ]
    },
    languagesSpoken: {
      title: "Langues Parlées",
      subtitle: "Les langues que je parle et mon niveau de maîtrise.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      items: [
        { name: 'Français', icon: <GiTalk />, color: 'text-blue-700', level: 'Langue courante' },
        { name: 'Anglais', icon: <BsGlobe />, color: 'text-red-600', level: 'Intermédiaire' },
      ]
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Floating Emojis */}
          {floatingEmojis.map((emoji, index) => (
            <div 
              key={index}
              className="absolute text-2xl text-gray-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${1 + Math.random() * 2}rem`,
                opacity: 0.2,
                animation: `float ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              {emoji}
            </div>
          ))}
          
          {/* Aurora Effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute w-[300%] h-[300%] animate-aurora-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              Mes Compétences
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les technologies et outils que je maîtrise pour créer des applications web modernes et performantes.
            </p>
          </div>

          {/* Skills Sections */}
          {Object.entries(skills).map(([key, section]) => (
            <div key={key} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {section.items.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group relative flex flex-col items-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className={`${skill.color} text-4xl mb-4 transition-transform group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white text-center">
                      {skill.name}
                    </h3>
                    {skill.level && (
                      <p className="text-sm text-gray-400 mt-1 text-center">
                        {skill.level}
                      </p>
                    )}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes aurora-1 {
          0%, 100% { transform: translateX(-25%) translateY(-10%) rotate(-5deg); }
          50% { transform: translateX(25%) translateY(10%) rotate(5deg); }
        }
        .animate-aurora-1 {
          animation: aurora-1 25s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}