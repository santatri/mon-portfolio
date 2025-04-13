import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={
              <div style={{textAlign: 'center', padding: '50px'}}>
                <h1>404 - Page non trouvée</h1>
                <a href="/">Retour à l'accueil</a>
              </div>
            } />
      </Routes>
    </div>
  );
}