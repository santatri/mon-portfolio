import Header from '../components/Header'
import Footer from '../components/Footer'
import portfolio from '../img/portfolio.jpg'
import ftr from '../img/frt.png'


const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Un portfolio moderne avec React et Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: portfolio,
    link: "" // Ajoutez cette ligne avec l'URL de votre projet
  },
  {
    id: 2,
    title: "FactureApp",
    description: "Un Application web de gestion e facture et stock , Utilisé par 4K-Design  ",
    tags: ["React", "Tailwind CSS", "Vite","Node", "Express"],
    image: ftr,
    link: "" // Ajoutez cette ligne avec l'URL de votre projet
  },
  // Ajoutez d'autres projets...
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
              Mes Projets
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-cyan-500/10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 block" // Ajoutez 'block' pour que le lien prenne toute la place
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent mix-blend-overlay" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-br from-gray-700/50 to-gray-800/80 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/10 hover:text-white transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}