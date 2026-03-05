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
        <section id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Travaillons ensemble</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 mb-4">
                        Contactez-moi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
                        Vous avez un projet, une opportunité ou juste envie d'échanger ? N'hésitez pas !
                    </p>
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={contact.action}
                            className={`${contact.color} backdrop-blur-sm border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-start gap-4 group`}
                        >
                            <div className={`p-2.5 rounded-lg bg-gray-800/60 ${contact.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                {contact.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-white/90 mb-0.5">{contact.name}</h3>
                                <p className="text-sm text-white/70 break-all">{contact.value}</p>
                                {(contact.id === 1 || contact.id === 2) && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            copyToClipboard(contact.value, contact.copyKey);
                                        }}
                                        className="mt-2 text-xs px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-cyan-400 hover:text-cyan-300 transition"
                                    >
                                        {copied === contact.copyKey ? '✓ Copié !' : `Copier ${contact.id === 1 ? 'le numéro' : "l'email"}`}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Availability note */}
                <div className="mt-10 text-center p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 font-medium text-sm">Disponible pour de nouvelles missions</span>
                    </div>
                    <p className="text-gray-400 text-sm">Basé à Antananarivo, Madagascar — Disponible à distance ou en présentiel</p>
                </div>
            </div>
        </section>
    );
}
