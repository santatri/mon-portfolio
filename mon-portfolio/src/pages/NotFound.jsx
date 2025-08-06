import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optionnel: changer le titre de la page
    document.title = "Page non trouvée - 404";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Oups! La page que vous cherchez n'existe pas.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}