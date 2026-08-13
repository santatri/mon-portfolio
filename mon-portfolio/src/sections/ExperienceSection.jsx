import { FaUniversity, FaBriefcase, FaTools, FaBuilding, FaGlobe } from 'react-icons/fa';

const experienceItems = [
    {
        id: 1,
        title: 'MTEFOP',
        role: 'Développeur Web – Stage en binôme',
        company: 'MTEFOP',
        context: 'Participation au développement d’une plateforme destinée aux agents de l’État afin de centraliser l’accès aux procédures administratives et aux ressources institutionnelles.',
        period: 'Nov. 2024 - Fév. 2025',
        tags: ['React', 'Node.js', 'Express', 'MySQL'],
        type: 'stage',
        color: 'from-cyan-500 to-blue-600',
        icon: <FaUniversity />,
        link: '',
        responsibilities: [
            'Analyse des besoins métiers',
            'Développement frontend React',
            'Création d’API Node.js / Express',
            'Intégration et tests fonctionnels',
        ],
        result: 'Centralisation de l’accès aux ressources administratives et amélioration de l’efficacité des agents.',
    },
    {
        id: 2,
        title: 'FactureApp — 4K Design',
        role: 'Responsable Développement & Déploiement',
        company: 'AST COM Web',
        context: 'Conception, développement et mise en production d’une application de facturation et de gestion de stock destinée à l’entreprise 4K Design.',
        period: 'Avr. 2025 - Août 2025',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
        type: 'stage',
        color: 'from-emerald-400 to-cyan-500',
        icon: <FaBriefcase />,
        link: 'https://4kdesigns-mada.com',
        responsibilities: [
            'Analyse des besoins et modélisation de la base de données',
            'Développement frontend React',
            'Développement backend Node.js / Express',
            'Création des API et gestion de la facturation',
            'Tests, déploiement et maintenance',
        ],
        result: 'Digitalisation du processus de facturation et amélioration du suivi des stocks grâce à une solution centralisée.',
    },
    {
        id: 3,
        title: 'S.E.S MED',
        role: 'Responsable des Mises à Jour et Évolutions Fonctionnelles',
        company: 'AST COM Web',
        context: 'Participation à la maintenance et à l’évolution d’un CRM médical international utilisé pour la gestion des opérations métier et des commandes.',
        period: 'Août 2025 - Aujourd’hui',
        tags: ['Angular', 'Symfony', 'Docker', 'Tailwind CSS'],
        type: 'professionnel',
        color: 'from-red-400 to-pink-500',
        icon: <FaTools />,
        link: 'https://ses-med.com',
        responsibilities: [
            'Mises à jour fonctionnelles et correctifs',
            'Ajout de nouvelles fonctionnalités client',
            'Optimisation des flux métier',
            'Maintenance et support technique',
        ],
        result: 'Renforcement de la stabilité du CRM et amélioration des modules métier pour un usage international.',
    },
    {
        id: 4,
        title: 'GE_CFPM',
        role: 'Responsable Développement & Déploiement',
        company: 'GE_CFPM',
        context: 'Conception et développement complet d’un système de gestion administrative destiné à un centre de formation professionnelle.',
        period: 'Nov. 2025 - Mars 2026',
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
        type: 'professionnel',
        color: 'from-violet-400 to-purple-600',
        icon: <FaBuilding />,
        link: '',
        responsibilities: [
            'Analyse fonctionnelle et architecture technique',
            'Conception de la base de données PostgreSQL',
            'Développement frontend React',
            'Développement backend Node.js / Express',
            'Déploiement et maintenance continue',
        ],
        result: 'Centralisation des opérations administratives et amélioration du suivi des apprenants et des formations.',
    },
    {
        id: 5,
        title: 'SANSPANERA',
        role: 'Développement de plateforme locale',
        company: 'Projet personnel',
        context: 'Développement d’une plateforme numérique locale dédiée aux échanges commerciaux et locatifs à Madagascar.',
        period: '2025 — En cours',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
        type: 'personnel',
        color: 'from-orange-400 to-amber-500',
        icon: <FaGlobe />,
        link: '',
        responsibilities: [
            'Gestion des annonces et des comptes utilisateurs',
            'Développement d’une marketplace locale',
            'Mise en place d’un modèle économique d’annonces payantes',
            'Tests et validation des parcours utilisateurs',
        ],
        result: 'Création d’une plateforme locale de mise en relation commerciale et locative avec un modèle économique basé sur les annonces payantes.',
    },
];
const typeColors = {
    stage: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    collaboration: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    freelance: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    contribution: 'bg-red-500/20 text-red-300 border-red-500/30',
    professionnel: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    personnel: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background Glowing Blobs */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Title */}
                <div className="mb-16 text-center lg:text-left">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Mon évolution</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Expériences & <span className="text-gradient-indigo">Réalisations</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto lg:mx-0" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-transparent hidden sm:block rounded-full" />

                    <div className="space-y-12">
                        {experienceItems.map((item, index) => (
                            <div key={item.id} className="relative flex gap-8 sm:gap-16 group">
                                {/* Timeline Circle with Icon */}
                                <div className="hidden sm:flex flex-col items-center">
                                    <div className={`w-24 h-24 rounded-3xl bg-gray-900 border border-white/10 flex items-center justify-center text-3xl shadow-2xl z-10 group-hover:border-indigo-500/50 transition-all duration-500 group-hover:shadow-indigo-500/20 group-hover:-translate-y-1`}>
                                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card p-6 sm:p-10 rounded-[2.5rem] glass-card-hover group-hover:-translate-y-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div>
                                            {/* Mobile icon */}
                                            <div className={`sm:hidden inline-flex w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-xl mb-4`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${typeColors[item.type]}`}>
                                                    {item.role}
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{item.period}</span>
                                            </div>
                                        </div>
                                        
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all active:scale-90"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-gray-400 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">{item.context}</p>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                                <p className="text-sm text-indigo-300 uppercase tracking-[0.2em] font-black mb-3">Responsabilités</p>
                                                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                                                    {item.responsibilities.map((task, idx) => (
                                                        <li key={idx} className="flex gap-2"><span className="text-indigo-400">•</span>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    <span className="font-bold text-indigo-400 uppercase text-[10px] tracking-widest block mb-1">Résultat</span>
                                                    {item.result}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-indigo-500/20 transition-colors">
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
