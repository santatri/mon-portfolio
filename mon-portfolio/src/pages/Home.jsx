import { useEffect } from 'react'; // Ajoutez useEffect

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
   // Ajoutez cet effet pour scroller en haut lorsque le composant est monté
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}