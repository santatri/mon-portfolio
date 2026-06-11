import { useState } from 'react';

const contacts = [
    {
        id: 1,
        name: 'Téléphone / WhatsApp',
        value: '+261 383073485',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        color: 'bg-green-500/15 border-green-500/30 hover:border-green-400/50',
        iconColor: 'text-green-400',
        action: () => window.open('https://wa.me/+261383073485', '_blank'),
        copyKey: 'phone',
    },
    {
        id: 2,
        name: 'Email',
        value: 'santatriniainafeno01@gmail.com',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'bg-cyan-500/15 border-cyan-500/30 hover:border-cyan-400/50',
        iconColor: 'text-cyan-400',
        action: () => window.open('mailto:santatriniainafeno01@gmail.com', '_blank'),
        copyKey: 'email',
    },
    {
        id: 3,
        name: 'Facebook',
        value: 'Santatriniaina Feno Nasandratra',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
        ),
        color: 'bg-blue-600/15 border-blue-600/30 hover:border-blue-400/50',
        iconColor: 'text-blue-400',
        action: () => window.open('https://www.facebook.com/santatrinniaina.nasandratra', '_blank'),
    },
    {
        id: 4,
        name: 'LinkedIn',
        value: 'Feno Nasandratra SANTATRINIANA',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        color: 'bg-blue-400/15 border-blue-400/30 hover:border-blue-300/50',
        iconColor: 'text-blue-300',
        action: () => window.open('https://linkedin.com/in/feno-nasandratra-santatriniana-731196311', '_blank'),
    },
    {
        id: 5,
        name: 'GitHub',
        value: 'github.com/santatri',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
        color: 'bg-gray-500/15 border-gray-500/30 hover:border-gray-400/50',
        iconColor: 'text-gray-300',
        action: () => window.open('https://github.com/santatri', '_blank'),
    },
    {
        id: 6,
        name: 'Adresse',
        value: 'Antananarivo, Madagascar',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: 'bg-amber-500/15 border-amber-500/30 hover:border-amber-400/50',
        iconColor: 'text-amber-400',
        action: () => window.open('https://www.google.com/maps/place/Tananarive', '_blank'),
    },
];

export default function ContactSection() {
    const [copied, setCopied] = useState(null);

    const copyToClipboard = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="contact" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full filter blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Title */}
                <div className="mb-16 text-center">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Vous avez une idée ?</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Vous avez un projet, une idée ou un besoin spécifique ?
                    </h2>
                    <p className="mx-auto max-w-3xl text-sm text-gray-400 sm:text-base leading-relaxed">
                        Je suis disponible pour discuter de solutions web adaptées à vos objectifs et contribuer à la réalisation de projets innovants. Réponse sous 24 heures.
                    </p>
                    <div className="mt-8 w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="glass-card p-10 rounded-[2.5rem] border-indigo-500/10">
                            <h3 className="text-2xl font-black text-white mb-8">Coordonnées</h3>
                            <div className="space-y-6">
                                {contacts.slice(0, 4).map((contact) => (
                                    <div
                                        key={contact.id}
                                        onClick={contact.action}
                                        className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-indigo-500/10 ${contact.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            {contact.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{contact.name}</p>
                                            <p className="text-sm font-bold text-white/90 truncate">{contact.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Status Card */}
                        <div className="glass-card p-8 rounded-[2rem] border-emerald-500/10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
                                    <div className="w-4 h-4 bg-emerald-500 rounded-full relative" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white uppercase tracking-widest">Disponible</p>
                                    <p className="text-xs text-emerald-400/80">Pour de nouvelles missions freelances</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Socials & More */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {contacts.slice(4).map((contact) => (
                            <div
                                key={contact.id}
                                onClick={contact.action}
                                className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer border-white/5 hover:border-indigo-500/30 transition-all"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                    {contact.icon}
                                </div>
                                <h4 className="text-lg font-black text-white mb-2">{contact.name}</h4>
                                <p className="text-sm text-gray-500 mb-6">{contact.value}</p>
                                <div className="mt-auto w-full py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    Visiter
                                </div>
                            </div>
                        ))}

                        {/* Direct Email Card */}
                        <div className="sm:col-span-2 glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border-white/10 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-black text-white mb-4">Besoin d'un dev réactif ?</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">Envoyez-moi un message direct ou discutons sur LinkedIn pour une réponse sous 24h.</p>
                            <button 
                                onClick={() => window.open('mailto:santatriniainafeno01@gmail.com')}
                                className="px-10 py-4 rounded-2xl bg-white text-gray-950 font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                            >
                                santatriniainafeno01@gmail.com
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
