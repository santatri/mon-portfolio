import { useState } from 'react';
import projects from '../data/projectsData';

export default function ProjectsSection() {
    const [activeImageIndex, setActiveImageIndex] = useState(() =>
        projects.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
    );

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
        <section id="projets" className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-20 px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Ce que j'ai construit</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                        Mes Projets
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        Des applications web concrètes développées avec des technologies modernes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/60 shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image carousel */}
                            <div className="relative h-52 overflow-hidden flex-shrink-0">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${project.title} - ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === activeImageIndex[project.id] ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

                                {/* Nav buttons */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 z-10 backdrop-blur-sm transition"
                                            onClick={(e) => { e.preventDefault(); prevImage(project.id); }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 z-10 backdrop-blur-sm transition"
                                            onClick={(e) => { e.preventDefault(); nextImage(project.id); }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        {/* Dots */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                                            {project.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    className={`h-1.5 rounded-full transition-all ${index === activeImageIndex[project.id] ? 'bg-cyan-400 w-4' : 'bg-white/40 w-1.5'
                                                        }`}
                                                    onClick={(e) => { e.preventDefault(); setActiveImageIndex(prev => ({ ...prev, [project.id]: index })); }}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Image count badge */}
                                {project.images.length > 1 && (
                                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full z-10">
                                        {activeImageIndex[project.id] + 1}/{project.images.length}
                                    </div>
                                )}
                            </div>

                            {/* Card content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs mb-3 italic">{project.projet}</p>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center bg-gray-700/60 text-cyan-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/10 transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Voir le projet
                                    </a>
                                )}
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-400/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
