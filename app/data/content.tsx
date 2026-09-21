import type { ReactNode } from "react";
import {
  ColorLightIcon,
  RealProjectIcon,
  ScalableUIIcon,
  VectorSystemsIcon,
} from "../components/icons/SkillIcons";
import {
  AdaptsMetaphorIcon,
  FollowsGuidelinesIcon,
  ReadsDesignSystemIcon,
} from "../components/icons/WhyIcons";

export interface SkillItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface MaterialItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const curriculumData: SkillItem[] = [
  {
    title: "Setup Collaboratif & 3 Règles d'Or",
    description: "Configuration de l'espace de travail d'agence, gestion des dossiers et standardisation rapide : maximum 2 polices, règle de 3 couleurs et cadres optimisés.",
    icon: <VectorSystemsIcon />,
  },
  {
    title: "Automatisation & Déclinaison Rapide",
    description: "Déclinaison instantanée d'un visuel clé vers tous les formats (Story, Reel, Post carré, Affiche), pipette stratégique et animations à fort impact.",
    icon: <ScalableUIIcon />,
  },
  {
    title: "Studio Magique & Révolution IA",
    description: "Transformation d'images en templates modifiables, Magic Grab pour détacher ou déplacer n'importe quel élément et Grab Text pour éditer le texte incrusté.",
    icon: <ColorLightIcon />,
  },
  {
    title: "Ateliers & Défi Simulation d'Agence",
    description: "Personnalisation sur-mesure selon votre secteur et défi chronométré en équipe (15 min) avec rôles stratégiques : Directeur Artistique, Rédacteur et Designer.",
    icon: <RealProjectIcon />,
  },
];

export const whyData: WhyItem[] = [
  {
    title: "Canva comme moteur de productivité d'agence",
    description: "Fini le temps perdu à recommencer chaque visuel de zéro. Vous apprenez à structurer des dossiers d'équipe et à standardiser votre flux de production.",
    icon: <ReadsDesignSystemIcon />,
  },
  {
    title: "L'Intelligence Artificielle en action concrète",
    description: "Exploitez Magic Grab, Grab Text et la transformation d'images en templates pour rendre n'importe quelle affiche ou photo modifiable en quelques secondes.",
    icon: <FollowsGuidelinesIcon />,
  },
  {
    title: "Méthode d'équipe testée sur le terrain",
    description: "Animé par Dhaker Abdesslem, Community Manager en agence et Formateur Certifié TOT, combinant compétences techniques, marketing et communicationnelles.",
    icon: <AdaptsMetaphorIcon />,
  },
];

export const materialsData = {
  anatomy: {
    title: "1 Mois Canva Pro OFFERT",
    description: "Un mois d'abonnement Canva Pro complet offert à chaque participant pour pratiquer immédiatement toutes les fonctionnalités Magic Studio."
  },
  toolkit: {
    title: "Accès Illimité au Support de Cours",
    description: "Support de formation complet accessible à vie avec fiches mémo, raccourcis et gabarits de travail réutilisables."
  },
  saas: {
    title: "Guide des 3 Règles d'Or du Design",
    description: "Méthode express pour harmoniser n'importe quelle création : maximum 2 polices, règle des 3 couleurs et placement optimal des cadres."
  },
  gradients: {
    title: "Matrice d'Exportation Pro",
    description: "Guide comparatif pour choisir le bon format de livraison : PNG (réseaux sociaux), JPG (web léger), PDF (print & rapports) et MP4 (motion)."
  },
  ai: {
    title: "Studio Magique : Magic Grab & Grab Text",
    description: "Tutoriels pas à pas pour détacher les éléments, reconstruire l'arrière-plan et extraire le texte incrusté dans des visuels existants."
  },
  texture: {
    title: "Kit Défi Simulation d'Agence",
    description: "Fiches de mission pour les rôles de Directeur Artistique, Rédacteur et Designer lors du travail de groupe chronométré de 15 minutes."
  }
};

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Sonia M.",
    role: "Community Manager",
    company: "Tunis",
    avatar: "SM",
    highlight: "Magic Grab et la déclinaison automatique m'ont fait gagner 2h par jour",
    quote: "La masterclass de Dhaker va droit au but. En une demi-journée, j'ai compris comment convertir un visuel en Story, Post carré et Reel en quelques clics sans rien déformer. Le défi de simulation d'agence était génial !",
  },
  {
    name: "Karim Ben Amor",
    role: "Responsable Communication",
    company: "Sousse",
    avatar: "KB",
    highlight: "La règle des 3 couleurs et des 2 polices a professionnalisé toute notre équipe",
    quote: "Dhaker possède une vraie expertise terrain en agence et en radio. Ses explications sur le Studio Magique Canva et la gestion d'équipe ont permis à nos 4 collaborateurs de standardiser immédiatement nos créations.",
  },
  {
    name: "Inès Trabelsi",
    role: "Fondatrice E-commerce & Freelance",
    company: "Sfax",
    avatar: "IT",
    highlight: "120 DT rentabilisés dès la première semaine de publication",
    quote: "Le mois Canva Pro offert et le support de cours à vie sont un vrai plus. J'ai appris à transformer des affiches existantes en templates modifiables grâce à l'IA. Un investissement indispensable pour tout pro en Tunisie.",
  },
];

export const faqData: FaqItem[] = [
  {
    question: "Quelle est la durée et le format de la Masterclass ?",
    answer: "La masterclass se déroule sur une demi-journée (4 heures de formation intensive et interactive). Elle est dispensée en ligne en direct (ou en présentiel pour les groupes et entreprises selon disponibilités). Vous aurez accès au support de cours complet à vie.",
  },
  {
    question: "Qui anime la formation ?",
    answer: "La session est animée par Dhaker Abdesslem, Formateur Certifié TOT (Octobre 2025) et expert en compétences numériques. Il est actuellement Community Manager chez Manicraft Tunisie, ancien CM chez Gate Training, animateur radio de l'émission « Warda Business » et diplômé d'un BTS en Multimédia & Design Web.",
  },
  {
    question: "Quels sont les bonus inclus avec la formation ?",
    answer: "Chaque participant bénéficie de 1 mois d'abonnement Canva Pro OFFERT pour pratiquer en illimité, ainsi que d'un accès illimité à vie à l'intégralité du support de cours et des fiches mémos de la masterclass.",
  },
  {
    question: "Quel est le tarif individuel et y a-t-il une offre pour les équipes ?",
    answer: "Le tarif public individuel est de 120 DT / personne. Pour les groupes et entreprises (partenariats associations, équipes marketing jusqu'à 8 membres), un tarif préférentiel forfaitaire est proposé à 400 DT au total (soit seulement 50 DT par personne).",
  },
  {
    question: "Quels sont les moyens de paiement acceptés en Tunisie ?",
    answer: "Nous acceptons tous les moyens de paiement tunisiens usuels : D17 (La Poste Tunisienne), Flouci, Konnect, Virement bancaire direct (RIB tunisien), et Carte bancaire nationale. Dès votre réservation, vous recevrez toutes les indications nécessaires.",
  },
  {
    question: "Faut-il avoir des compétences préalables en design ?",
    answer: "Aucun niveau préalable n'est requis. La masterclass est spécialement conçue pour les professionnels du marketing, de la communication, les community managers et les entrepreneurs qui veulent démultiplier leur productivité grâce à Canva et à l'IA.",
  },
];

export interface ModuleSyllabusItem {
  moduleNumber: number;
  title: string;
  duration: string;
  overview: string;
  keyPoints: string[];
  deliverable: string;
}

export const weeklySyllabusData: ModuleSyllabusItem[] = [
  {
    moduleNumber: 1,
    title: "Module 1 : Introduction & Setup Collaboratif",
    duration: "45 min",
    overview: "Découverte de l'interface Canva orientée productivité d'agence, structuration de l'espace de travail en équipe et standardisation graphique immédiate.",
    keyPoints: [
      "Interface agence & dossiers partagés",
      "Les 3 Règles d'Or du design express (2 polices, 3 couleurs, cadres)",
      "Standardisation de la production pour aller 5x plus vite"
    ],
    deliverable: "Espace d'équipe optimisé & charte express validée"
  },
  {
    moduleNumber: 2,
    title: "Module 2 : Automatisation & Déclinaison de Contenus",
    duration: "45 min",
    overview: "Méthodes pour adapter instantanément un visuel clé vers tous vos canaux de diffusion et dynamiser vos créations avec des animations percutantes.",
    keyPoints: [
      "Déclinaison rapide multi-formats (Story, Reel, Post carré, Affiche)",
      "Harmonisation des couleurs à la pipette stratégique",
      "Animation avancée des éléments graphiques"
    ],
    deliverable: "Pack de visuels multi-formats déclinés et animés"
  },
  {
    moduleNumber: 3,
    title: "Module 3 : La Révolution de l'IA (Studio Magique)",
    duration: "1h",
    overview: "Exploitation concrète des outils d'Intelligence Artificielle de Canva pour transformer, modifier et déconstruire n'importe quelle image en quelques secondes.",
    keyPoints: [
      "Transformation d'une photo ou affiche en template modifiable",
      "Capture Magique (Magic Grab) avec reconstruction du fond",
      "Extraction & réécriture directe de texte incrusté (Grab Text)"
    ],
    deliverable: "Créations graphiques rééditées avec les outils IA"
  },
  {
    moduleNumber: 4,
    title: "Module 4 : Ateliers Pratiques de Productivité",
    duration: "1h",
    overview: "Mise en pratique sur vos propres cas d'usage professionnels et grand défi collectif chronométré en conditions réelles de travail en agence.",
    keyPoints: [
      "Personnalisation de modèles selon votre secteur d'activité",
      "Défi chronométré « Simulation d'Agence » (15 minutes)",
      "Répartition stratégique des rôles : Directeur Artistique, Rédacteur, Designer"
    ],
    deliverable: "Visuel officiel finalisé en équipe sous contrainte de temps"
  },
  {
    moduleNumber: 5,
    title: "Module 5 : Finalisation & Exportation",
    duration: "30 min",
    overview: "Guide pratique pour sélectionner les meilleurs formats et résolutions selon la destination finale de vos supports de communication.",
    keyPoints: [
      "PNG haute fidélité pour les réseaux sociaux et la transparence",
      "JPG optimisé et léger pour le web et les emails",
      "PDF haute résolution pour l'impression et les rapports officiels",
      "MP4 pour les Reels, vidéos et le motion design"
    ],
    deliverable: "Dossier d'exportation prêt pour diffusion web, print et vidéo"
  }
];

export const instructorData = {
  name: "Dhaker Abdesslem",
  role: "Formateur Certifié (TOT) & Expert en Compétences Numériques",
  title: "Community Manager & Conseiller Branding · Spécialiste Productivité & IA sur Canva",
  bio: "Expert alliant compétences techniques, marketing et communicationnelles, Dhaker Abdesslem est formateur certifié (TOT) depuis octobre 2025. Actuellement Community Manager chez Manicraft Tunisie et fort d'expériences chez Gate Training et HK Vision, il anime également l'émission radio « Warda Business » en tant que conseiller branding. Diplômé d'un BTS en Multimédia & Design Web et primé à la JCI Ouardanine, il enseigne une méthode 100% orientée productivité d'agence et maîtrise de l'IA sur Canva.",
  quote: "L'objectif n'est pas seulement de faire de jolis visuels, mais de transformer Canva en véritable moteur de productivité pour accélérer la production de contenus à grande échelle.",
  socials: {
    linkedin: "https://www.linkedin.com/in/dhakerabdesslem",
    facebook: "https://www.facebook.com/abdesslemdhaker",
    instagram: "https://www.instagram.com/dhaker.abdesslem",
    linkedinHandle: "in/dhakerabdesslem",
    facebookHandle: "abdesslemdhaker",
    instagramHandle: "@dhaker.abdesslem"
  },
  credentials: [
    { label: "Certification", value: "Formateur TOT (2025)" },
    { label: "Poste Actuel", value: "CM Manicraft Tunisie" },
    { label: "Médias", value: "Radio Warda Business" },
    { label: "Formation", value: "BTS Multimédia & Web" }
  ],
  pastWorkWith: [
    "Manicraft Tunisie",
    "Gate Training",
    "Radio Warda Business",
    "HK Vision",
    "JCI Ouardanine",
    "Dev Excellence"
  ]
};

export const managerExpenseTemplate = {
  subject: "Demande de prise en charge : Masterclass Productivité & IA sur Canva - Formateur Dhaker Abdesslem",
  body: `Bonjour [Nom du Responsable],

Je souhaite solliciter votre accord pour participer à la prochaine session de la « Masterclass Productivité & IA sur Canva », animée par Dhaker Abdesslem (Formateur Certifié TOT et Community Manager).

Il s'agit d'une formation intensive de 4 heures (demi-journée), axée à 100% sur la productivité d'agence, l'automatisation et les outils d'Intelligence Artificielle de Canva (Magic Studio, Magic Grab, Grab Text).

Ce que cette formation va apporter à notre équipe :
1. Standardisation immédiate de notre production graphique (application des 3 Règles d'Or : max 2 polices, 3 couleurs, cadres optimisés).
2. Déclinaison ultra-rapide d'un visuel vers tous nos formats réseaux sociaux (Story, Reel, Post, Affiche).
3. Gain de temps massif grâce à l'IA pour transformer des images existantes en templates modifiables.
4. Bonus inclus : 1 mois d'abonnement Canva Pro offert + accès illimité au support de cours.

L'investissement s'élève à 120 DT par personne (ou formule groupe à tarif préférentiel de 400 DT pour l'équipe).

Pourriez-vous m'indiquer si cette prise en charge est validée afin de confirmer la réservation ?

Bien cordialement,
[Votre Prénom et Nom]`
};

