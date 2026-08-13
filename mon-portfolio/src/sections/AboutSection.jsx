import { MdCode, MdLocationOn } from 'react-icons/md';
import { FaGem, FaShieldAlt, FaExchangeAlt, FaBook, FaMapMarkerAlt, FaEnvelope, FaBolt, FaGraduationCap } from 'react-icons/fa';

export default function AboutSection() {
    return (
        <section id="apropos" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-violet-600/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Title */}
                <div className="mb-16">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">L'humain derrière le code</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        À propos de <span className="text-gradient-indigo">moi</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Main Story Card */}
                    <div className="lg:col-span-7 group">
                        <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] glass-card-hover">
                            <h3 className="text-2xl font-bold text-white mb-6">Je conçois des solutions métiers concrètes.</h3>
                            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Étudiant en Génie Logiciel à l'ISPM, je participe à la conception et au développement d'applications web répondant à des besoins métiers concrets.
                                </p>
                                <p>
                                    Mon expérience couvre l'ensemble du cycle de développement :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Analyse des besoins</li>
                                    <li>Conception technique</li>
                                    <li>Modélisation des bases de données</li>
                                    <li>Développement frontend</li>
                                    <li>Développement backend</li>
                                    <li>Déploiement</li>
                                    <li>Maintenance et évolutions</li>
                                </ul>
                                <p>
                                    J'accorde une attention particulière à la qualité du code, à la performance des applications et à l'expérience utilisateur afin de proposer des solutions fiables et durables.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Qualité', text: 'Projets fiables et maintenables', icon: <FaGem /> },
                                    { label: 'Fiabilité', text: 'Applications stables en production', icon: <FaShieldAlt /> },
                                    { label: 'Adaptabilité', text: 'Solutions sur mesure pour vos besoins', icon: <FaExchangeAlt /> },
                                    { label: 'Apprentissage continu', text: 'Évolution constante des compétences', icon: <FaBook /> },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-3xl transition-all hover:bg-white/10">
                                        <span className="text-2xl mb-3 block">{item.icon}</span>
                                        <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">{item.label}</p>
                                        <p className="text-sm text-white/90 font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Info Card */}
                        <div className="glass-card p-8 rounded-[2.5rem] glass-card-hover border-indigo-500/20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <MdLocationOn className="text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Bio Express</h4>
                            </div>
                            
                            <div className="space-y-4">
                                    {[
                                    { label: 'Basé à', value: 'Antananarivo, MG', icon: <FaMapMarkerAlt /> },
                                    { label: 'Email', value: 'santatriniainafeno01@gmail.com', icon: <FaEnvelope />, isEmail: true },
                                    { label: 'Stack', value: 'React • Node.js • Symfony • Angular', icon: <FaBolt /> },
                                    { label: 'Formation', value: 'ISPM - IGGLIA', icon: <FaGraduationCap /> },
                                ].map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 transition-all hover:border-indigo-500/30 group/item ${item.isEmail ? 'cursor-pointer' : ''}`}
                                        onClick={() => {
                                            if (item.isEmail) {
                                                navigator.clipboard.writeText(item.value);
                                                alert('Email copié !');
                                            }
                                        }}
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</span>
                                            <span className={`text-sm font-medium ${item.isEmail ? 'text-indigo-300 group-hover/item:text-indigo-200' : 'text-gray-300'}`}>
                                                {item.value}
                                            </span>
                                        </div>
                                        <span className="text-lg opacity-40 group-hover/item:opacity-100 transition-opacity">{item.icon}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Skills Card */}
                        <div className="glass-card p-8 rounded-[2.5rem] glass-card-hover border-violet-500/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                                    <MdCode className="text-2xl" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Focus Technique</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Node.js', 'Express', 'Tailwind', 'PostgreSQL', 'Docker', 'Git'].map(skill => (
                                    <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-violet-500/40 transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
