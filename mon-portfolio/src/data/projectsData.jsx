// src/data/projectsData.js
import portfolio from '../img/portfolio.jpg';
import ftr from '../img/frt.png';
import about from '../img/about.jpg'
import skill from '../img/skill.jpg'
import projet from '../img/projet.jpg'
import contact from '../img/contact1.jpg'

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Un portfolio moderne avec React et Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Vite"],
    images: [portfolio, about,skill,projet,contact], // Tableau d'images
    link: "https://santatriniaina-portfolio.vercel.app"
  },
  {
    id: 2,
    title: "FactureApp",
    description: "Application web de gestion de factures et stock, utilisée par 4K-Design",
    tags: ["React", "Tailwind CSS", "Vite", "Node", "Express"],
    images: [ftr], // Tableau d'images
    link: ""
  },
];

export default projects;