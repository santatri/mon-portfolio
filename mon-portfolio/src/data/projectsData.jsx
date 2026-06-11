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

// CFPM
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
    title: 'Standard de service',
    subtitle: 'MTEFOP',
    description: 'Portail officiel pour agents de l’État, conçu pour centraliser l’accès aux procédures, actualités et ressources administratives.',
    context: 'Stage en binôme au sein de MTEFOP, co-développé avec RANDRIANIRIANA Toky Herizo.',
    objective: 'Centraliser l’accès aux procédures administratives et aux ressources institutionnelles pour les agents.',
    features: ['Recherche documentaire optimisée', 'Tableau de bord des procédures', 'Pages de ressources métiers', 'Accès sécurisé par rôle'],
    role: 'Responsable frontend/backend — intégration des interfaces et des flux API.',
    result: 'Amélioration de l’accès à l’information administrative et simplification des démarches pour les agents.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'API REST'],
    images: [ftr],
    demo: '',
    github: '',
    projet: 'Stage en binôme',
  },
  {
    id: 2,
    title: 'FactureApp',
    subtitle: 'AST COM WEB — Stage 4K Design',
    description: 'Solution de facturation et de gestion de stock développée durant un stage AST COM WEB pour le client 4K Design.',
    context: 'Conception, développement et mise en production d’une application de facturation et de gestion de stock destinée à l’entreprise 4K Design.',
    objective: 'Digitaliser la facturation et centraliser le suivi des stocks pour réduire les erreurs et accélérer les processus.',
    features: ['Gestion clients', 'Création de factures', 'Suivi des stocks', 'Reporting financier', 'Authentification sécurisée'],
    role: 'Responsable Développement & Déploiement.',
    result: 'Digitalisation du processus de facturation et amélioration du suivi des stocks grâce à une solution centralisée.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    images: [login, user, client, produit, fature],
    demo: 'https://4kdesigns-mada.com',
    github: '',
    projet: 'Stage professionnel',
  },
  {
    id: 3,
    title: 'Plateforme Digitale',
    subtitle: 'SansPanera',
    description: 'Marketplace locale pour annonces commerciales et locatives à Madagascar, avec options payantes et gestion d’annonces.',
    context: 'Création d’un MVP pour connecter vendeurs, locataires et acheteurs sur un marché régional.',
    objective: 'Construire une plateforme locale de publication d’annonces avec un modèle économique basé sur les annonces payantes.',
    features: ['Gestion des annonces', 'Comptes utilisateurs', 'Marketplace locale', 'Paiement d’annonces', 'Recherche par catégorie'],
    role: 'Chef de projet technique et développeur full stack.',
    result: 'Prototype fonctionnel permettant de tester un modèle commercial local et soutenir l’économie des échanges à Madagascar.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    images: [homesp, completer, contactsp, annonce, historique, listes, loginsp],
    demo: '',
    github: '',
    projet: 'MVP personnel',
  },
  {
    id: 4,
    title: 'S.E.S MED',
    subtitle: 'AST COM WEB',
    description: 'CRM médical réalisé au sein d’AST COM WEB, avec des modules de commandes, gestion clientèle et suivi des opérations.',
    context: 'Participation à la maintenance et à l’évolution d’un CRM médical international utilisé pour la gestion des opérations métier et des commandes.',
    objective: 'Maintenir et enrichir un CRM médical pour renforcer la gestion des modules métier et la stabilité du produit.',
    features: ['Mises à jour fonctionnelles', 'Support technique', 'Optimisation backend Symfony', 'Déploiement Docker'],
    role: 'Responsable des Mises à Jour et Évolutions Fonctionnelles.',
    result: 'Renforcement de la stabilité et de la fiabilité du CRM pour une utilisation professionnelle durable.',
    tags: ['Angular', 'Symfony', 'Docker', 'Tailwind CSS'],
    images: [ses5, ses2, ses3, ses4, ses6, ses1],
    demo: 'https://ses-med.com',
    github: '',
    projet: 'Mission entreprise',
  },
  {
    id: 5,
    title: 'GE_CFPM',
    subtitle: 'CFPM Madagascar',
    description: 'Système de gestion pour le centre de formation professionnelle CFPM, couvrant inscriptions, cursus et administration.',
    context: 'Conception et développement complet d’un système de gestion administrative destiné à un centre de formation professionnelle.',
    objective: 'Digitaliser les opérations administratives et améliorer le suivi des apprenants et des formations.',
    features: ['Gestion des rôles', 'Portail d’administration', 'Suivi des apprenants', 'Reporting formation', 'Déploiement stable'],
    role: 'Responsable Développement & Déploiement.',
    result: 'Centralisation des opérations administratives et amélioration du suivi des apprenants et des formations.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    images: [cfpm1, cfpm2, cfpm3, cfpm4, cfpm5, cfpm6, cfpm7],
    demo: '',
    github: '',
    projet: 'Projet professionnel',
  },
];

export default projects;
