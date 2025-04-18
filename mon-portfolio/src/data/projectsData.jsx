// src/data/projectsData.js
//Portfolio
import portfolio from '../img/portfolio.jpg';
import about from '../img/about.jpg'
import skill from '../img/skill.jpg'
import projet from '../img/projet.jpg'
import contact from '../img/contact1.jpg'

// MTEFOP
import ftr from '../img/frt.png';

//4K
import login from '../img/login.jpg'
import user from '../img/users.jpg'
import client from '../img/clients.jpg'
import produit from '../img/produits.jpg'
import fature from '../img/factures.jpg'


const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Un portfolio moderne avec React et Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Vite"],
    images: [portfolio, about,skill,projet,contact], // Tableau d'images
    link: "https://santatriniaina-portfolio.vercel.app",
     projet:"Projet personnelle"
  },
  {
    id: 2,
    title: "Standard se service ",
    description: "Application web  permet aux agents de l’État et aux citoyens d’obtenir des informations essentielles sur la gestion de la fonction publique, les procédures administratives, ainsi que les réformes en cours.",
    tags: ["React", "CSS", "Node", "Express","Mysql"],
    images: [ftr], // Tableau d'images
    link: "",
    projet:"Projet encour / colaboration avec RANDRIANIRIANA Toky Herizo "
  },
  {
    id: 3,
    title: "FactureApp",
    description: "Application web de gestion de factures et stock, utilisée par l'Entreprise 4K-Design",
    tags: ["React", "Tailwind CSS", "Vite", "Node", "Express","Mysql"],
    images: [login,user,client,produit,fature], // Tableau d'images
    link: "",
    projet:"Projet personnelle"

  },
];

export default projects;