import React from 'react';
import profil from '../img/cv.png';
import cv from '../cv/SANTATRINIAINA_Feno_Nasandratra_CV.pdf';
import { FaRocket, FaLaptopCode } from 'react-icons/fa';

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
        <section id="accueil" className="relative min-h-screen overflow-hidden bg-gray-950 flex items-center px-4 pt-28 pb-16 sm:px-6">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full filter blur-[120px] animate-aurora" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full filter blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }} />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-sky-600/10 rounded-full filter blur-[100px] animate-pulse-slow" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full text-center lg:w-3/5 lg:text-left order-2 lg:order-1">
                        {/* Badge métier */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            <span className="text-indigo-300 font-mono text-xs tracking-wider uppercase">Développeur Web Polyvalent</span>
                        </div>

                        <h1 className="mb-4 font-bold text-white">
                            <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                                SANTATRINIAINA
                            </span>
                            <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white/80 mt-1">
                                Feno Nasandratra
                            </span>
                        </h1>

                        <p className="mx-auto mb-10 max-w-xl text-base text-gray-400 sm:text-lg md:mx-0 leading-relaxed">
                            Je conçois, développe et déploie des applications web adaptées aux besoins réels des entreprises et des organisations. De l'analyse des besoins jusqu'à la mise en production, je transforme les idées en solutions numériques fiables, performantes et évolutives.
                        </p>

                        {/* Stats Grid - 3 cards only */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                            {[
                                { title: '5+ projets réalisés', subtitle: 'Solutions concrètes livrées' },
                                { title: '3 expériences professionnelles', subtitle: 'Projets en contexte réel' },
                                { title: 'React • Node.js • Symfony • Angular', subtitle: 'Compétences business-ready' },
                            ].map((stat, index) => (
                                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-md shadow-indigo-500/10 backdrop-blur-xl transition-all hover:-translate-y-1">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 mb-1">{stat.title}</p>
                                    <p className="text-xs text-gray-300">{stat.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                            {['React', 'Node.js', 'Symfony', 'Angular', 'Tailwind CSS', 'Docker'].map(tech => (
                                <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-indigo-200 backdrop-blur-md">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="group relative inline-flex items-center justify-center px-7 py-3 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-xl hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                            >
                                Me contacter
                            </button>
                            <button
                                onClick={() => scrollTo('projets')}
                                className="inline-flex items-center justify-center px-7 py-3 font-bold text-indigo-300 transition-all duration-300 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/50"
                            >
                                Mes projets
                            </button>
                            <button
                                onClick={handleDownloadCV}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-300 transition-all duration-300 hover:text-white group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Télécharger mon CV
                            </button>
                        </div>
                    </div>

                    {/* Profile Image with Modern Mask */}
                    <div className="w-full flex justify-center lg:w-2/5 order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
                            
                            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-2 border-white/20 transition-all duration-700 group-hover:rounded-[50%] group-hover:border-indigo-500/50">
                                <img
                                    src={profil}
                                    alt="Santatriniaina Feno"
                                    className="h-full w-full object-cover scale-110 transition duration-700 group-hover:scale-100"
                                />
                            </div>
                            
                            <div className="absolute -top-4 -right-4 h-10 w-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center animate-bounce shadow-2xl">
                                <FaRocket className="text-xl" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 h-14 w-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center animate-pulse shadow-2xl" style={{ animationDelay: '1s' }}>
                                <FaLaptopCode className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                    <button onClick={() => scrollTo('apropos')} className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors group">
                        <div className="w-6 h-10 border-2 border-current rounded-full relative">
                            <div className="w-1 h-2 bg-current rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}