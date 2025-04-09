import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import portfolio from '../img/portfolio.jpg';
import ftr from '../img/frt.png';

const floatingEmojis = [
  '💻', '🚀', '🔧', '📱', '🌐', '🖥️', '📊', '💾', '🧠', '⚙️', '🔌',
  '📝', '🧩', '🎨', '🔍', '👨‍💻', '👩‍💻', '🤖', '💡', '🛠️', '🔨', '📚',
  '🔬', '🧪', '⌨️', '🖱️', '💽', '📀', '🖨️', '📡', '🔋', '📶', '🎯',
  '✨', '🌟', '💫', '🪐', '🧑‍🚀'
];

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Un portfolio moderne avec React et Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: portfolio,
    link: ""
  },
  {
    id: 2,
    title: "FactureApp",
    description: "Application web de gestion de factures et stock, utilisée par 4K-Design",
    tags: ["React", "Tailwind CSS", "Vite", "Node", "Express"],
    image: ftr,
    link: ""
  },
];

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      {/* Background animé - Emojis flottants discrets */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none emoji-container">
        {floatingEmojis.map((emoji, index) => {
          // Configuration subtile pour les emojis
          const size = 0.8 + Math.random() * 1.2; // Taille réduite
          const duration = 40 + Math.random() * 50; // Durée plus longue
          const delay = Math.random() * 30; // Délai aléatoire
          const opacity = 0.1 + Math.random() * 0.2; // Opacité très faible
          const startX = Math.random() * 100; 
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 60 - 30); // Déplacement plus aléatoire
          const endY = startY + (Math.random() * 60 - 30);
          const rotate = Math.random() * 360; // Rotation aléatoire

          return (
            <div 
              key={index}
              className="absolute floating-emoji"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                fontSize: `${size}rem`,
                opacity: opacity,
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
                '--end-x': `${endX}%`,
                '--end-y': `${endY}%`,
                '--rotate': `${rotate}deg`,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      <Header />
      
      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              Mes Projets
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-cyan-500/10 shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center bg-gray-700/50 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/10 hover:text-white transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
                
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-400/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .emoji-container {
          perspective: 1000px;
        }
        
        .floating-emoji {
          will-change: transform, opacity;
          transform-style: preserve-3d;
          pointer-events: none;
          user-select: none;
        }
        
        @keyframes float {
          0% {
            transform: 
              translate(0, 0)
              rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: var(--opacity);
          }
          100% {
            transform: 
              translate(calc(var(--end-x) - var(--start-x)), calc(var(--end-y) - var(--start-y)))
              rotate(var(--rotate));
            opacity: 0;
          }
        }

        /* Ajustements pour mobile */
        @media (max-width: 640px) {
          .floating-emoji {
            font-size: calc(0.5rem + 1vw);
          }
        }
      `}</style>
    </div>
  );
}