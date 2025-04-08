// src/components/About.jsx
export default function About() {
    return (
      <section id="a-propos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">À propos de moi</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Photo de profil" 
                className="rounded-lg shadow-xl w-full max-w-xs mx-auto"
              />
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                Passionné par le développement web depuis plusieurs années, je me spécialise dans la création 
                d'interfaces utilisateur modernes et réactives.
              </p>
              <p className="text-gray-600 mb-4">
                Mon expertise couvre React, JavaScript, et les frameworks CSS comme Tailwind. J'aime résoudre 
                des problèmes complexes et créer des expériences utilisateur fluides.
              </p>
              <div className="mt-6">
                <a 
                  href="#competences" 
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
                >
                  Voir mes compétences
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }