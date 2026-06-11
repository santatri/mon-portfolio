import {
    FaReact, FaNodeJs, FaGithub, FaPhp, FaSymfony, FaDocker, FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiPostman, SiAngular } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skills = {
    frontend: {
        title: 'Frontend',
        subtitle: 'Interfaces modernes et réactives',
        gradient: 'from-indigo-400 via-violet-400 to-sky-400',
        items: [
            { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
            { name: 'Angular', icon: <SiAngular />, color: 'text-red-500' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
        ],
    },
    backend: {
        title: 'Backend',
        subtitle: 'Services et API fiables',
        gradient: 'from-emerald-400 via-cyan-400 to-sky-400',
        items: [
            { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
            { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
            { name: 'Symfony', icon: <FaSymfony />, color: 'text-indigo-500' },
            { name: 'PHP', icon: <FaPhp />, color: 'text-violet-400' },
        ],
    },
    databases: {
        title: 'Bases de données',
        subtitle: 'Stockage et performance',
        gradient: 'from-violet-400 to-purple-500',
        items: [
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-400' },
            { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
        ],
    },
    tools: {
        title: 'Outils',
        subtitle: 'Écosystème et gouvernance',
        gradient: 'from-sky-400 to-blue-500',
        items: [
            { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
            { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
            { name: 'Docker', icon: <FaDocker />, color: 'text-sky-400' },
            { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
            { name: 'VS Code', icon: <VscCode />, color: 'text-blue-500' },
        ],
    },
};

export default function SkillsSection() {
    return (
        <section id="skills" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Title */}
                <div className="mb-16 text-center">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Mon arsenal technique</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Compétences & <span className="text-gradient-indigo">Expertise</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
                </div>

                <div className="space-y-20">
                    {Object.entries(skills).map(([key, section]) => (
                        <div key={key} className="relative">
                            <div className="mb-10 text-center lg:text-left">
                                <h3 className={`text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${section.gradient} mb-2 tracking-tight`}>
                                    {section.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{section.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                                {section.items.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2"
                                    >
                                        <div className={`${skill.color} text-4xl mb-4 transition-transform group-hover:scale-125 duration-500`}>
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-xs font-black text-white text-center tracking-widest uppercase">{skill.name}</h4>
                                        
                                        <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
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
