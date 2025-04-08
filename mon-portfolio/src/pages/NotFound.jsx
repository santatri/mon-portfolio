// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary dark:text-primary-light mb-6">404</h1>
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            La page que vous recherchez semble introuvable. Elle a peut-être été déplacée ou supprimée.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary dark:bg-primary-light text-white px-8 py-3 rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition text-lg font-medium"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}