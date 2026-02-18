// src/data/projectsData.js


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

//cfpm

import cfpm1 from '../img/cf1.jpg';
import cfpm2 from '../img/cf2.jpg';
import cfpm3 from '../img/cf3.jpg';
import cfpm4 from '../img/cf4.jpg';
import cfpm5 from '../img/cf5.jpg';
import cfpm6 from '../img/cf6.jpg';
import cfpm7 from '../img/cf7.jpg';

const projects = [
  
  {
    id: 1,
    title: "Standard de service (MTEFOP)",
    description: "Plateforme web à destination des agents de l’État et du grand public, facilitant l’accès aux informations sur la fonction publique, les démarches administratives et les réformes en cours.",
    tags: ["React", "CSS", "Node", "Express", "MySQL"],
    images: [ftr],
    link: "",
    projet: "Projet en cours - en collaboration avec RANDRIANIRIANA Toky Herizo"
  },
  {
    id: 2,
    title: "FactureApp - 4K Design",
    description: "Application complète de gestion des factures et des stocks pour l’entreprise 4K-Design. Elle propose des fonctionnalités de gestion des utilisateurs, clients, produits et factures via une interface intuitive.",
    tags: ["React + Vite", "Tailwind CSS", "Node", "Express", "MySQL"],
    images: [login, user, client, produit, fature],
    link: "https://4kdesigns-mada.com",
    projet: "Projet personnel"
  },
  {
    id: 3,
    title: "Plateforme Digitale - SansPanera",
    description: "Plateforme en ligne dédiée aux échanges commerciaux et locatifs à Madagascar, avec un système d’annonces payantes intégré pour les utilisateurs.",
    tags: ["React + Vite", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    images: [homesp, completer, contactsp, annonce, historique, listes, loginsp],
    link: "",
    projet: "Projet personnel en cours"
  },
  {
    id: 4,
    title: "S.E.S MED",
    description: "Application web pour l’entreprise SESMED, permettant la gestion des utilisateurs, des clients, des produits et des factures, avec une interface moderne et performante.",
    tags: ["Angular", "Symfony", "Docker", "Tailwind CSS"],
    images: [ses5, ses2, ses3, ses4, ses6, ses1],
    link: "https://ses-med.com",
    projet: "Contribution au développement du module de bons de commande et plusieurs fonctionnalités de l’application"
  },
  {
    id: 5,
    title: "GE_CFPM",
    description: "Application web pour la gestion d'un centre de  formations(CFPM de Madagascar), avec une interface conviviale et des fonctionnalités avancées.",
    tags: ["React", "Node.js", "Express","PostgreSQL", "Tailwind CSS"],
    images: [cfpm1, cfpm2, cfpm3, cfpm4, cfpm5, cfpm6, cfpm7],
    link: "",
    projet: "Projet professionnel en cours"
  },
];

export default projects;
