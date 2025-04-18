import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/projectsData';

const floatingEmojis = [
  '💻', '🚀', '🔧', '📱', '🌐', '🖥️', '📊', '💾', '🧠', '⚙️', '🔌',
  '📝', '🧩', '🎨', '🔍', '👨‍💻', '👩‍💻', '🤖', '💡', '🛠️', '🔨', '📚',
  '🔬', '🧪', '⌨️', '🖱️', '💽', '📀', '🖨️', '📡', '🔋', '📶', '🎯',
  '✨', '🌟', '💫', '🪐🧑‍🚀'
];

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialiser l'index actif pour chaque projet
    const initialIndexes = projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {});
    setActiveImageIndex(initialIndexes);
  }, []);

  const nextImage = (projectId) => {
    setActiveImageIndex(prev => {
      const project = projects.find(p => p.id === projectId);
      const currentIndex = prev[projectId];
      const nextIndex = (currentIndex + 1) % project.images.length;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const prevImage = (projectId) => {
    setActiveImageIndex(prev => {
      const project = projects.find(p => p.id === projectId);
      const currentIndex = prev[projectId];
      const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      {/* Background animé - Emojis flottants */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none emoji-container">
        {floatingEmojis.map((emoji, index) => {
          const size = 0.8 + Math.random() * 1.2;
          const duration = 40 + Math.random() * 50;
          const delay = Math.random() * 30;
          const opacity = 0.1 + Math.random() * 0.2;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 60 - 30);
          const endY = startY + (Math.random() * 60 - 30);
          const rotate = Math.random() * 360;

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
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {/* Carrousel d'images avec navigation */}
                  <div className="relative h-48 overflow-hidden">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          index === activeImageIndex[project.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    
                    {/* Boutons de navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
                          onClick={(e) => {
                            e.preventDefault();
                            prevImage(project.id);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
                          onClick={(e) => {
                            e.preventDefault();
                            nextImage(project.id);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Indicateurs de position */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === activeImageIndex[project.id] 
                                ? 'bg-cyan-400 w-4' 
                                : 'bg-white/50'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveImageIndex(prev => ({
                                ...prev,
                                [project.id]: index
                              }));
                            }}
                          />
                        ))}
                      </div>
                    )}
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
    </div>
  );
}