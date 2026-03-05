import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiTypescript, SiJavascript, SiAngular, SiSymfony, SiPostgresql } from 'react-icons/si';
import { MdSchool, MdCode, MdEmail, MdLocationOn, MdCake } from 'react-icons/md';

export default function AboutSection() {
    return (
        <section id="apropos" className="relative bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 py-20 px-4 sm:px-6 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Qui suis-je ?</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                        À propos de moi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left column */}
                    <div className="space-y-6">
                        {/* Personal info card */}
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/60 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 mb-5">
                                SANTATRINIAINA Feno Nasandratra
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { icon: <MdLocationOn className="text-cyan-400 text-xl" />, label: 'Localisation', value: 'Antananarivo, Madagascar' },
                                    { icon: <MdCake className="text-emerald-400 text-xl" />, label: 'Date de naissance', value: '04 Mars 2002' },
                                    { icon: <MdEmail className="text-blue-400 text-xl" />, label: 'Email', value: 'santatriniainafeno01@gmail.com' },
                                    { icon: <MdSchool className="text-purple-400 text-xl" />, label: 'Éducation', value: 'ISPM - IGGLIA' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/60 rounded-xl border border-gray-700/50 hover:border-cyan-400/20 transition-all">
                                        {item.icon}
                                        <div>
                                            <p className="text-xs text-gray-400">{item.label}</p>
                                            <p className="text-sm text-gray-200">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/60 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex items-center gap-3 text-cyan-400 mb-3">
                                <MdSchool className="text-2xl" />
                                <h3 className="text-lg font-semibold">Formation académique</h3>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">
                                Étudiant en <span className="text-emerald-300 font-medium">Informatique de gestion — Génie Logiciel et Intelligence Artificielle</span> à l'Institut Supérieur Polytechnique de Madagascar (ISPM).
                            </p>
                            <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">2021 — Présent</span>
                        </div>

                        {/* Expertise */}
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/60 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                            <div className="flex items-center gap-3 text-cyan-400 mb-3">
                                <MdCode className="text-2xl" />
                                <h3 className="text-lg font-semibold">Domaines d'expertise</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {[
                                    'Développement Frontend avec React.js et Angular',
                                    'Développement Backend avec Node.js/Express et Symfony',
                                    'Conception UI/UX avec Tailwind CSS',
                                    'Architecture des bases de données relationnelles',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start group">
                                        <span className="text-emerald-400 mr-3 text-base group-hover:text-cyan-400 transition-all">▹</span>
                                        <span className="group-hover:text-white transition-all">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                        {/* Tech skills tags */}
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/60 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
                                Compétences Techniques
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { icon: <FaReact />, label: 'React.js', color: 'text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/10' },
                                    { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/10' },
                                    { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-400 border-green-500/20 hover:bg-green-500/10' },
                                    { icon: <SiExpress />, label: 'Express', color: 'text-gray-300 border-gray-600/20 hover:bg-gray-700/50' },
                                    { icon: <SiTypescript />, label: 'TypeScript', color: 'text-blue-400 border-blue-500/20 hover:bg-blue-500/10' },
                                    { icon: <SiJavascript />, label: 'JavaScript', color: 'text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/10' },
                                    { icon: <SiMysql />, label: 'MySQL', color: 'text-orange-500 border-orange-500/20 hover:bg-orange-500/10' },
                                    { icon: <SiPostgresql />, label: 'PostgreSQL', color: 'text-sky-400 border-sky-500/20 hover:bg-sky-500/10' },
                                    { icon: <SiSymfony />, label: 'Symfony', color: 'text-gray-300 border-gray-600/20 hover:bg-gray-700/50' },
                                    { icon: <SiAngular />, label: 'Angular', color: 'text-red-500 border-red-500/20 hover:bg-red-500/10' },
                                ].map((skill, i) => (
                                    <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/60 text-sm border transition-all ${skill.color}`}>
                                        {skill.icon}
                                        <span>{skill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* About me */}
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/60 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
                                Qui suis-je ?
                            </h3>
                            <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                                <p>Passionné par le développement web depuis mes études, je me spécialise dans la création d'applications full stack performantes et esthétiques.</p>
                                <p>Mon parcours à l'ISPM m'a permis d'acquérir des compétences solides en génie logiciel tout en développant une approche pratique grâce à divers projets personnels et professionnels.</p>
                                <p>Je m'intéresse particulièrement aux architectures modernes, aux bonnes pratiques de développement et à l'expérience utilisateur.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/60 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                                Travaillons ensemble
                            </h3>
                            <p className="text-sm text-gray-300 mb-5">Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.</p>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full flex items-center justify-center bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:from-emerald-500 hover:to-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/30 hover:scale-105 text-sm"
                            >
                                Contactez-moi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
