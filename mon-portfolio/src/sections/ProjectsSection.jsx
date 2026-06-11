import { useState } from 'react';
import projects from '../data/projectsData';

export default function ProjectsSection() {
    const [activeImageIndex, setActiveImageIndex] = useState(() =>
        projects.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
    );
    const [filter, setFilter] = useState('Tous');

    const categories = ['Tous', 'Stage', 'Professionnel', 'Personnel'];

    const filteredProjects = projects.filter(project => {
        if (filter === 'Tous') return true;
        if (filter === 'Stage') return project.projet.toLowerCase().includes('stage');
        if (filter === 'Professionnel') return project.projet.toLowerCase().includes('professionnel') || project.projet.toLowerCase().includes('entreprise');
        if (filter === 'Personnel') return project.projet.toLowerCase().includes('personnel');
        return true;
    });

    const nextImage = (projectId) => {
        setActiveImageIndex(prev => {
            const project = projects.find(p => p.id === projectId);
            return { ...prev, [projectId]: (prev[projectId] + 1) % project.images.length };
        });
    };

    const prevImage = (projectId) => {
        setActiveImageIndex(prev => {
            const project = projects.find(p => p.id === projectId);
            return { ...prev, [projectId]: (prev[projectId] - 1 + project.images.length) % project.images.length };
        });
    };

    return (
        <section id="projets" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.03)_0,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Title */}
                <div className="mb-12 text-center">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Mes créations</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Projets <span className="text-gradient-indigo">Sélectionnés</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/5 border border-white/5 rounded-2xl w-fit mx-auto backdrop-blur-md">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                                filter === cat
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col glass-card rounded-[2.5rem] overflow-hidden glass-card-hover border-white/5"
                        >
                            {/* Image Carousel */}
                            <div className="relative h-64 overflow-hidden group/image">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${project.title} - ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover/image:scale-100 ${index === activeImageIndex[project.id] ? 'opacity-100 rotate-0' : 'opacity-0 rotate-3'}`}
                                    />
                                ))}
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                                
                                {project.images.length > 1 && (
                                    <>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                            {project.images.map((_, i) => (
                                                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeImageIndex[project.id] ? 'w-6 bg-indigo-500' : 'w-2 bg-white/30'}`} />
                                            ))}
                                        </div>
                                        
                                        <button 
                                            onClick={(e) => { e.preventDefault(); prevImage(project.id); }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover/image:opacity-100 transition-all hover:bg-indigo-600 active:scale-90 flex items-center justify-center border border-white/10"
                                            aria-label="Précédent"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        
                                        <button 
                                            onClick={(e) => { e.preventDefault(); nextImage(project.id); }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover/image:opacity-100 transition-all hover:bg-indigo-600 active:scale-90 flex items-center justify-center border border-white/10"
                                            aria-label="Suivant"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">{project.projet}</span>
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 uppercase tracking-widest">{project.subtitle}</span>
                                </div>
                                
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-300 transition-colors tracking-tight">{project.title}</h3>
                                
                                <p className="text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="rounded-3xl bg-white/5 border border-white/10 p-4">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-indigo-400 font-black mb-2">Objectif</p>
                                        <p className="text-sm text-gray-300 leading-relaxed">{project.objective}</p>
                                    </div>
                                    <div className="grid gap-2 sm:grid-cols-2 text-sm text-gray-300">
                                        {project.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex gap-2 items-start rounded-2xl bg-white/5 border border-white/10 p-3">
                                                <span className="mt-1 text-indigo-400">•</span>
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 transition-colors group-hover:border-indigo-500/20 group-hover:text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-200 transition hover:bg-indigo-500/20 hover:text-white"
                                            >
                                                Démo
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 hover:border-indigo-500/30"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
