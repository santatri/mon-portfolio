import React from 'react';
import profil from '../img/cv.png';
import cv from '../cv/SANTATRINIAINA_Feno_Nasandratra_CV.pdf';

const floatingEmojis = [
    '💻', '🚀', '🔧', '📱', '🌐', '🖥️', '📊', '💾', '🧠', '⚙️', '🔌',
    '📝', '🧩', '🎨', '🔍', '📚', '🔬', '💡', '🖱️', '⌨️', '🖨️',
    '🔋', '📶', '🔒', '🔓', '📡', '💿', '📀', '🕹️', '👨‍💻', '👩‍💻'
];

export default function HeroSection() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'CV-SANTATRINIAINA_Feno_Nasandratra.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
            {/* Floating Emojis */}
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
                        <div key={index} className="absolute text-2xl float-emoji" style={animationStyle}>
                            {emoji}
                        </div>
                    );
                })}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
                    {/* Profile Image */}
                    <div className="order-first mb-4 w-full flex justify-center lg:w-1/2">
                        <div className="group relative h-44 w-44 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-88 xl:w-88">
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
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full text-center lg:w-1/2 lg:text-left">
                        <p className="text-emerald-400 font-mono text-sm sm:text-base mb-2 tracking-widest uppercase">Bonjour, je suis</p>
                        <h1 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                            <span className="bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                SANTATRINIAINA<br />Feno Nasandratra
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-cyan-300 font-medium mb-4">Développeur Web Full Stack</p>
                        <p className="mx-auto mb-6 max-w-lg text-sm text-gray-300 sm:text-base md:mx-0 md:text-lg">
                            Passionné par le développement web, j'utilise <strong className="text-white">React</strong>, <strong className="text-white">Angular</strong>, <strong className="text-white">Node.js</strong> et <strong className="text-white">Symfony</strong> pour concevoir des applications performantes, intuitives et évolutives.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                            {['React', 'Angular', 'Node.js', 'Symfony', 'PostgreSQL', 'MySQL'].map(tech => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/80 border border-cyan-500/30 text-cyan-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:justify-start">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:from-emerald-400 hover:via-cyan-500 hover:to-blue-600 hover:shadow-cyan-500/30 hover:scale-105"
                            >
                                Me contacter
                            </button>
                            <button
                                onClick={() => scrollTo('projets')}
                                className="inline-flex justify-center rounded-lg border border-cyan-400/50 px-5 py-2.5 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition hover:border-cyan-300/70 hover:bg-cyan-500/10 hover:text-white hover:scale-105"
                            >
                                Voir mes projets
                            </button>
                            <button
                                onClick={handleDownloadCV}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/50 px-5 py-2.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition hover:border-emerald-300/70 hover:bg-emerald-500/10 hover:text-white hover:scale-105"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Télécharger CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll down indicator */}
                <div className="flex justify-center mt-12 md:mt-16">
                    <button onClick={() => scrollTo('apropos')} className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors group">
                        <span className="text-xs tracking-widest uppercase font-mono">Découvrir</span>
                        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <style>{`
        .float-emoji {
          left: var(--left);
          top: var(--start-position);
          font-size: var(--size);
          opacity: var(--opacity);
          animation: floatUp var(--duration) linear infinite;
          animation-delay: var(--delay);
          transform: rotate(var(--rotation));
        }
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10%, 90% { opacity: var(--opacity); }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
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
        .animate-aurora-spin { animation: aurora-spin 20s linear infinite; }
        .animate-aurora-spin-reverse { animation: aurora-spin-reverse 25s linear infinite; }
      `}</style>
        </section>
    );
}
