import projects from '../data/projectsData';

const experienceItems = [
    {
        id: 1,
        title: 'Standard de service — MTEFOP',
        role: 'Développeur Full Stack (Stage)',
        company: 'MTEFOP',
        context: 'Collaboration avec RANDRIANIRIANA Toky Herizo sur une plateforme officielle à destination des agents de l\'État.',
        period: '2024 — 2025',
        tags: ['React', 'CSS', 'Node.js', 'Express', 'MySQL'],
        type: 'stage',
        color: 'from-cyan-500 to-blue-600',
        icon: '🏛️',
        link: '',
    },
    {
        id: 2,
        title: 'FactureApp — 4K Design',
        role: 'Développeur Full Stack (Stage en entreprise)',
        company: 'AST COM Web',
        context: 'Développement complet d\'une application de gestion de factures et de stocks pour l\'entreprise 4K-Design.',
        period: '2024 -2025',
        tags: ['React + Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
        type: 'stage',
        color: 'from-emerald-400 to-cyan-500',
        icon: '💼',
        link: 'https://4kdesigns-mada.com',
    },
    {
        id: 3,
        title: 'S.E.S MED',
        role: 'Développeur Full Stack (Responsable des mises à jour)',
        company: 'S.E.S MED',
        context: 'Responsable de toutes les mises à jour, création de modules et implémentation de fonctionnalités clés pour le module de bons de commande.',
        period: '2025 - Aujourd\'hui',
        tags: ['Angular', 'Symfony', 'Docker', 'Tailwind CSS'],
        type: 'professionnel',
        color: 'from-red-400 to-pink-500',
        icon: '🔧',
        link: 'https://ses-med.com',
    },
    {
        id: 4,
        title: 'GE_CFPM',
        role: 'Développeur Full Stack (Projet professionnel)',
        company: 'GE_CFPM',
        context: 'Application web complète pour la gestion administrative d\'un centre de formation professionnel .',
        period: '2025 — Aujourd\'hui',
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
        type: 'professionnel',
        color: 'from-violet-400 to-purple-600',
        icon: '🏢',
        link: '',
    },
    {
        id: 5,
        title: 'Plateforme Digitale — SansPanera',
        role: 'Développeur Full Stack (Projet personnel)',
        company: 'SansPanera',
        context: 'Plateforme en ligne dédiée aux échanges commerciaux et locatifs à Madagascar, avec un système d\'annonces payantes.',
        period: '2025 — En cours',
        tags: ['React + Vite', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
        type: 'personnel',
        color: 'from-orange-400 to-amber-500',
        icon: '🌐',
        link: '',
    },
];
const typeColors = {
    collaboration: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    freelance: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    contribution: 'bg-red-500/20 text-red-300 border-red-500/30',
    professionnel: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    personnel: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-20 px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-1/3 left-0 w-64 h-64 bg-violet-500/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Mon parcours</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                        Expériences & Réalisations
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        Mes projets professionnels, freelance et collaborations — chaque mission m'a permis de progresser.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-cyan-500/40 to-blue-500/40 hidden sm:block" />

                    <div className="space-y-8">
                        {experienceItems.map((item, index) => (
                            <div key={item.id} className="relative flex gap-6 sm:gap-10 group">
                                {/* Timeline dot */}
                                <div className="hidden sm:flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-gray-800/60 border border-gray-700/60 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            {/* Mobile icon */}
                                            <div className={`sm:hidden inline-flex w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} items-center justify-center text-lg mb-2`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                            <p className={`text-sm font-medium px-2.5 py-0.5 rounded-full border inline-block mt-1 ${typeColors[item.type]}`}>
                                                {item.role}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full font-mono">{item.period}</span>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Voir le site
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{item.context}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-700/60 text-cyan-300 border border-cyan-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
