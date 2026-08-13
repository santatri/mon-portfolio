import { FaTools } from 'react-icons/fa';

export default function ServicesSection() {
    const services = [
        'Applications Web Sur Mesure',
        'Logiciels de Gestion',
        'API REST',
        'Tableaux de Bord Administratifs',
        'Digitalisation de Processus Métiers',
        'Maintenance et Évolution d’Applications',
    ];

    return (
        <section id="services" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-sky-600/5 blur-3xl" />
                <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-12 text-center">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Ce que je peux réaliser</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">
                        Services web & solutions digitales
                    </h2>
                    <div className="mt-4 mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-500/5 transition hover:-translate-y-1 hover:border-indigo-500/20">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-300 text-2xl">
                                <FaTools />
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">{service}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Je propose des livrables concrets, pensés pour l’usage réel et l’évolution sur le long terme.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
