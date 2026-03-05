import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPhp, FaSymfony, FaDocker, FaDatabase
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiPostman, SiAngular } from 'react-icons/si';
import { DiW3C } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GiTalk } from 'react-icons/gi';
import { BsGlobe } from 'react-icons/bs';

const skills = {
    bases: {
        title: 'Langages de base',
        subtitle: 'Fondations du développement web',
        gradient: 'from-yellow-400 via-orange-400 to-red-500',
        items: [
            { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
            { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
            { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500' },
        ],
    },
    frameworks: {
        title: 'Frameworks & Librairies',
        subtitle: 'Outils modernes pour accélérer le développement',
        gradient: 'from-emerald-300 via-cyan-400 to-blue-500',
        items: [
            { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
            { name: 'Angular', icon: <SiAngular />, color: 'text-red-600' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
            { name: 'W3.CSS', icon: <DiW3C />, color: 'text-teal-500' },
            { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
            { name: 'Symfony', icon: <FaSymfony />, color: 'text-indigo-500' },
            { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        ],
    },
    databases: {
        title: 'Bases de Données',
        subtitle: 'Stockage et gestion des données',
        gradient: 'from-purple-400 via-pink-500 to-red-500',
        items: [
            { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-sky-400' },
        ],
    },
    tools: {
        title: 'Outils & Plateformes',
        subtitle: 'Environnements et outils de développement',
        gradient: 'from-green-400 to-blue-600',
        items: [
            { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
            { name: 'VS Code', icon: <VscCode />, color: 'text-blue-500' },
            { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
            { name: 'Docker', icon: <FaDocker />, color: 'text-sky-400' },
            { name: 'Xampp', icon: <FaDatabase />, color: 'text-orange-400' },
        ],
    },
    languages: {
        title: 'Langues',
        subtitle: 'Compétences linguistiques',
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        items: [
            { name: 'Français', icon: <GiTalk />, color: 'text-blue-400', level: 'Courant' },
            { name: 'Anglais', icon: <BsGlobe />, color: 'text-red-400', level: 'Intermédiaire' },
        ],
    },
};

export default function SkillsSection() {
    return (
        <section id="skills" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Mon arsenal</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                        Mes Compétences
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        Un aperçu complet des technologies que j'utilise pour créer des solutions web modernes.
                    </p>
                </div>

                <div className="space-y-16">
                    {Object.entries(skills).map(([key, section]) => (
                        <div key={key} className="relative">
                            <div className="text-center mb-8">
                                <h3 className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${section.gradient} mb-1`}>
                                    {section.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{section.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {section.items.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center p-5 rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                                    >
                                        <div className={`${skill.color} text-4xl mb-3 transition-transform group-hover:scale-110`}>
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-sm font-semibold text-white text-center mb-1">{skill.name}</h4>
                                        {skill.level && (
                                            <div className="text-xs text-gray-400 text-center px-2 py-0.5 bg-gray-700/60 rounded-full">
                                                {skill.level}
                                            </div>
                                        )}
                                        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
