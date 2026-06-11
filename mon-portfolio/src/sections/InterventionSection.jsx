export default function InterventionSection() {
    const interventions = [
        'Analyse des besoins',
        'Conception technique',
        'Modélisation des bases de données',
        'Développement Frontend',
        'Développement Backend',
        'Création d’API REST',
        'Déploiement',
        'Maintenance',
        'Optimisation',
    ];

    return (
        <section id="intervention" className="relative bg-gray-950 py-24 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-indigo-600/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-violet-600/5 blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-12 text-center">
                    <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Mon intervention sur les projets</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">
                        Ce que j’apporte à chaque étape
                    </h2>
                    <div className="mt-4 mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interventions.map((item) => (
                        <div key={item} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/5 transition hover:-translate-y-1 hover:border-indigo-500/20">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-300 text-xl">
                                ✓
                            </div>
                            <h3 className="text-lg font-black text-white mb-2">{item}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">J’accompagne cette étape avec rigueur et un pilotage métier orienté résultats.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
