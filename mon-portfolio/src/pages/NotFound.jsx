// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function NotFound() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Header />
//       <main className="pt-28 pb-20 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//         {/* Éléments décoratifs flottants */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <div 
//               key={i}
//               className="absolute text-gray-200 dark:text-gray-700 text-4xl"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 fontSize: `${1 + Math.random() * 3}rem`,
//                 opacity: 0.3,
//                 animation: `float ${15 + Math.random() * 20}s linear infinite`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 transform: `rotate(${Math.random() * 360}deg)`,
//               }}
//             >
//               {['❌', '⚠️', '🚫', '🔍', '🧭', '🗺️', '📄', '🔎'][Math.floor(Math.random() * 8)]}
//             </div>
//           ))}
//         </div>

//         <div className="container mx-auto text-center relative z-10">
//           <div className="relative inline-block mb-12">
//             <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-red-400 dark:to-amber-400">
//               404
//             </span>
//             <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-amber-500/10 dark:from-red-400/10 dark:to-amber-400/10 rounded-full animate-pulse blur-lg"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-white mb-6">
//             Oups ! Page introuvable
//           </h2>
          
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
//             La page que vous cherchez a peut-être été déplacée, supprimée ou n'existe jamais. 
//             <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
//               (Mais ne vous inquiétez pas, nous pouvons vous ramener à la sécurité)
//             </span>
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/"
//               className="relative overflow-hidden group inline-flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 dark:from-primary-light dark:to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg"
//             >
//               <span className="relative z-10 flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                 </svg>
//                 Retour à l'accueil
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary dark:from-blue-500 dark:to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </Link>
            
//             <button 
//               onClick={() => window.history.back()} 
//               className="relative overflow-hidden group inline-flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg"
//             >
//               <span className="relative z-10 flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
//                 </svg>
//                 Retour en arrière
//               </span>
//               <span className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </button>
//           </div>
          
//           <div className="mt-16 text-gray-500 dark:text-gray-400 text-sm">
//             <p>Si vous pensez qu'il s'agit d'une erreur, contactez-nous</p>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes float {
//             0% {
//               transform: translateY(0) rotate(0deg);
//               opacity: 0;
//             }
//             10% {
//               opacity: 0.3;
//             }
//             90% {
//               opacity: 0.3;
//             }
//             100% {
//               transform: translateY(-100vh) rotate(360deg);
//               opacity: 0;
//             }
//           }
//         `}</style>
//       </main>
//       <Footer />
//     </>
//   );
// }


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