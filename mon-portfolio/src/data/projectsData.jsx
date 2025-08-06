// src/data/projectsData.js

// Portfolio
import portfolio from '../img/portfolio.jpg';
import about from '../img/about.jpg';
import skill from '../img/skill.jpg';
import projet from '../img/projet.jpg';
import contact from '../img/contact1.jpg';

// MTEFOP
import ftr from '../img/frt.png';

// 4K
import login from '../img/login.jpg';
import user from '../img/users.jpg';
import client from '../img/clients.jpg';
import produit from '../img/produits.jpg';
import fature from '../img/factures.jpg';

// SP - Plateforme Digitale Madagascar
import annonce from '../img/annonceSP.jpg';
import completer from '../img/complerSP.jpeg';
import contactsp from '../img/contactSP.jpg';
import homesp from '../img/homeSP.jpg';
import historique from '../img/hystoriqueSP.jpeg';
import listes from '../img/listeSP.jpg';
import loginsp from '../img/loginSP.jpg';

// SES
import ses1 from '../img/ses1.jpg';
import ses2 from '../img/ses2.jpg';
import ses3 from '../img/ses3.jpg';
import ses4 from '../img/ses4.jpg';
import ses5 from '../img/ses5.jpg';
import ses6 from '../img/ses6.jpg';

const projects = [
  {
    id: 1,
    title: "Portfolio personnel",
    description: "Site portfolio développé avec React et Tailwind CSS, conçu pour présenter mes compétences, projets réalisés et expériences professionnelles.",
    tags: ["React", "Tailwind CSS", "Vite"],
    images: [portfolio, about, skill, projet, contact],
    link: "https://santatriniaina-portfolio.vercel.app",
    projet: "Projet personnel"
  },
  {
    id: 2,
    title: "Standard de service (MTEFOP)",
    description: "Plateforme web à destination des agents de l’État et du grand public, facilitant l’accès aux informations sur la fonction publique, les démarches administratives et les réformes en cours.",
    tags: ["React", "CSS", "Node", "Express", "MySQL"],
    images: [ftr],
    link: "",
    projet: "Projet en cours - en collaboration avec RANDRIANIRIANA Toky Herizo"
  },
  {
    id: 3,
    title: "FactureApp - 4K Design",
    description: "Application complète de gestion des factures et des stocks pour l’entreprise 4K-Design. Elle propose des fonctionnalités de gestion des utilisateurs, clients, produits et factures via une interface intuitive.",
    tags: ["React + Vite", "Tailwind CSS", "Node", "Express", "MySQL"],
    images: [login, user, client, produit, fature],
    link: "https://4kdesigns-mada.com",
    projet: "Projet personnel"
  },
  {
    id: 4,
    title: "Plateforme Digitale - SansPanera",
    description: "Plateforme en ligne dédiée aux échanges commerciaux et locatifs à Madagascar, avec un système d’annonces payantes intégré pour les utilisateurs.",
    tags: ["React + Vite", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    images: [homesp, completer, contactsp, annonce, historique, listes, loginsp],
    link: "",
    projet: "Projet personnel en cours"
  },
  {
    id: 5,
    title: "S.E.S MED",
    description: "Application web pour l’entreprise SESMED, permettant la gestion des utilisateurs, des clients, des produits et des factures, avec une interface moderne et performante.",
    tags: ["Angular", "Symfony", "Docker", "Tailwind CSS"],
    images: [ses5, ses2, ses3, ses4, ses6, ses1],
    link: "https://ses-med.com",
    projet: "Contribution au développement du module de bons de commande"
  }
];

export default projects;
