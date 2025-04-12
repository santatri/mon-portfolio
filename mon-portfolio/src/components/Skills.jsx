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
    frontend: {
      title: "Frontend",
      subtitle: "Technologies pour l'interface utilisateur",
      gradient: "from-emerald-300 via-cyan-400 to-blue-500",
      items: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400'},
        { name: 'W3.CSS', icon: <DiW3C />, color: 'text-teal-500'},
      ]
    },
    backend: {
      title: "Backend",
      subtitle: "Technologies côté serveur",
      gradient: "from-amber-400 to-orange-500",
      items: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', level: '' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-500', level: '' },
        { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500', level: 'Intermédiaire' },
      ]
    },
    databases: {
      title: "Bases de Données",
      subtitle: "Gestion et manipulation des données",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      items: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600', level: 'Intermédiaire' },
      ]
    },
    tools: {
      title: "Outils & Plateformes",
      subtitle: "Outils de développement et collaboration",
      gradient: "from-green-400 to-blue-600",
      items: [
        { name: 'GitHub', icon: <FaGithub />, color: 'text-black', level: 'Avancé' },
        { name: 'VS Code', icon: <VscCode />, color: 'text-blue-600', level: 'Avancé' },
        { name: 'Méthodes Agile', icon: <SiScrumalliance />, color: 'text-yellow-600', level: 'Connaissances' },
      ]
    },
    languages: {
      title: "Langues",
      subtitle: "Langues parlées et niveau",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      items: [
        { name: 'Français', icon: <GiTalk />, color: 'text-blue-700', level: 'Courament' },
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
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute w-[300%] h-[300%] animate-aurora-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 md:py-20">
          {/* Hero Section */}
          <section className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              Mes Compétences
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Un aperçu complet des technologies que j'utilise pour créer des solutions web modernes.
            </p>
          </section>

          {/* Skills Sections */}
          <div className="space-y-20">
            {Object.entries(skills).map(([key, section]) => (
              <section key={key} className="relative">
                <div className="absolute -top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50"></div>
                
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    {section.subtitle}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {section.items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="group relative flex flex-col items-center p-5 rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className={`${skill.color} text-4xl mb-3 transition-transform group-hover:scale-110`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white text-center mb-1">
                        {skill.name}
                      </h3>
                      <div className="text-sm text-gray-400 text-center px-2 py-1 bg-gray-700/50 rounded-full">
                        {skill.level}
                      </div>
                      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
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