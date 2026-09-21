import styles from "../../styles.module.css";

interface ProjectDeliverable {
  title: string;
  category: string;
  tag: string;
  useCase: string;
  description: string;
  svgVisual: React.ReactNode;
}

const studentProjects: ProjectDeliverable[] = [
  {
    title: "Pack Branding E-commerce Cosmétique Bio",
    category: "Branding & E-Commerce",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : Cosmétique & Boutiques en ligne",
    description: "Logo Canva, charte graphique complète, étiquettes packaging générées par IA et mockups 3D pour la boutique en ligne.",
    svgVisual: (
      <svg viewBox="0 0 260 160" className={styles['showcase-svg']} aria-hidden="true">
        <defs>
          <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="glowGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect x="30" y="20" width="200" height="120" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
        {/* Cosmetic serum bottle */}
        <rect x="75" y="48" width="34" height="64" rx="8" fill="url(#bioGrad)" />
        <rect x="85" y="36" width="14" height="14" rx="3" fill="#E2E8F0" />
        <circle cx="92" cy="30" r="4" fill="url(#glowGold)" />
        {/* Brand card */}
        <rect x="125" y="42" width="85" height="16" rx="4" fill="#33D6FF" />
        <rect x="125" y="66" width="70" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
        <rect x="125" y="80" width="55" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
        {/* Organic leaf icon */}
        <path d="M125 104 C130 96 142 96 145 106 C140 108 128 108 125 104 Z" fill="#10B981" />
        <text x="152" y="106" fill="#10B981" fontSize="9" fontWeight="bold">100% NATUREL</text>
      </svg>
    )
  },
  {
    title: "Campagne Sponsorisée Coffee Shop & Brunch",
    category: "Réseaux Sociaux & Ads",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : Restauration, Cafés & Événements",
    description: "Visuels Meta Ads 9:16 et 1:1, détourage automatique Magic Studio, vapeur et grains de café insérés par prompt IA réaliste.",
    svgVisual: (
      <svg viewBox="0 0 260 160" className={styles['showcase-svg']} aria-hidden="true">
        <defs>
          <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E63FF" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FF7CC8" />
          </linearGradient>
        </defs>
        <circle cx="130" cy="80" r="56" fill="rgba(124,58,237,0.12)" />
        {/* Coffee Cup / Mockup */}
        <path d="M105 60 H155 L148 104 H112 Z" fill="#1E293B" stroke="url(#coffeeGrad)" strokeWidth="2.5" />
        {/* Handle */}
        <path d="M152 68 C164 68 164 88 150 90" fill="none" stroke="#33D6FF" strokeWidth="2.5" />
        {/* Steam */}
        <path d="M120 52 C118 44 124 38 120 30" fill="none" stroke="#FF7CC8" strokeWidth="2" strokeLinecap="round" />
        <path d="M132 50 C130 42 136 36 132 28" fill="none" stroke="#33D6FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M142 52 C140 46 145 40 142 32" fill="none" stroke="#FF7CC8" strokeWidth="2" strokeLinecap="round" />
        {/* Promo sticker */}
        <rect x="80" y="112" width="100" height="20" rx="10" fill="url(#coffeeGrad)" />
        <text x="130" y="126" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">PROMO -30% · TUNIS</text>
      </svg>
    )
  },
  {
    title: "Carrousel LinkedIn B2B & Storytelling RH",
    category: "Content Marketing & B2B",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : B2B, Cabinets & Formateurs",
    description: "Carrousel viral de 7 slides rédigé via ChatGPT et mis en page en 15 minutes sur Canva avec charte graphique professionnelle.",
    svgVisual: (
      <svg viewBox="0 0 260 160" className={styles['showcase-svg']} aria-hidden="true">
        <defs>
          <linearGradient id="carouselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Stacked slides */}
        <rect x="55" y="32" width="110" height="100" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
        <rect x="75" y="24" width="110" height="100" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
        <rect x="95" y="16" width="110" height="100" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        {/* Slide 1 Content */}
        <circle cx="115" cy="35" r="7" fill="url(#carouselGrad)" />
        <rect x="128" y="31" width="60" height="7" rx="3" fill="#FFFFFF" />
        <rect x="108" y="52" width="80" height="5" rx="2.5" fill="#94A3B8" />
        <rect x="108" y="62" width="65" height="5" rx="2.5" fill="#94A3B8" />
        <rect x="108" y="72" width="72" height="5" rx="2.5" fill="#94A3B8" />
        {/* Swipe arrow */}
        <circle cx="185" cy="98" r="9" fill="#0284C7" />
        <path d="M183 94 L187 98 L183 102" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="110" y="102" fill="#38BDF8" fontSize="8" fontWeight="bold">Slide 1 / 7 →</text>
      </svg>
    )
  },
  {
    title: "Catalogue Produits & Dépliant Interactif",
    category: "Documents & Vente",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : Commerces, Catalogues & Print",
    description: "Catalogue numérique interactif Canva avec liens WhatsApp directs, QR code pour commande et gabarit prêt à l'impression offset.",
    svgVisual: (
      <svg viewBox="0 0 260 160" className={styles['showcase-svg']} aria-hidden="true">
        <defs>
          <linearGradient id="meterGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3E63FF" />
            <stop offset="60%" stopColor="#33D6FF" />
            <stop offset="100%" stopColor="#FF7CC8" />
          </linearGradient>
        </defs>
        {/* Catalog open booklet */}
        <path d="M45 40 L125 32 L125 128 L45 136 Z" fill="rgba(62,99,255,0.18)" stroke="rgba(255,255,255,0.25)" />
        <path d="M135 32 L215 40 L215 136 L135 128 Z" fill="rgba(51,214,255,0.18)" stroke="rgba(255,255,255,0.25)" />
        {/* Spine */}
        <line x1="130" y1="28" x2="130" y2="138" stroke="#33D6FF" strokeWidth="2" />
        {/* Left page items */}
        <rect x="58" y="50" width="26" height="26" rx="4" fill="#3E63FF" opacity="0.6" />
        <rect x="90" y="52" width="26" height="5" rx="2" fill="#FFFFFF" />
        <rect x="90" y="62" width="20" height="4" rx="2" fill="#94A3B8" />
        <rect x="90" y="70" width="16" height="4" rx="2" fill="#33D6FF" />
        {/* Right page QR code & WhatsApp */}
        <rect x="148" y="50" width="30" height="30" rx="4" fill="#FFFFFF" />
        <rect x="153" y="55" width="8" height="8" fill="#000000" />
        <rect x="165" y="55" width="8" height="8" fill="#000000" />
        <rect x="153" y="67" width="8" height="8" fill="#000000" />
        <rect x="146" y="92" width="55" height="14" rx="7" fill="#10B981" />
        <text x="173" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">COMMANDE DIRECTE</text>
      </svg>
    )
  }
];

export function StudentWorkSection() {
  return (
    <section className={`section ${styles['student-work-section']}`} id="gallery">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={`${styles.kicker} ${styles['section-dark-kicker']}`}>Projets & Réalisations</span>
          <h2>Ce que vous allez concrètement créer</h2>
          <p className="section-sub">
            De vrais livrables prêts à publier pour accélérer votre activité en Tunisie : visuels e-commerce, campagnes publicitaires pour restaurants, carrousels professionnels et catalogues interactifs.
          </p>
        </div>

        <div className={styles['showcase-grid']}>
          {studentProjects.map((project, i) => (
            <div
              key={i}
              className={`${styles['showcase-card']} reveal-on-scroll`}
              data-stagger-delay={`${i * 100}ms`}
            >
              <div className={styles['showcase-canvas']}>
                {project.svgVisual}
                <span className={styles['showcase-tag']}>{project.tag}</span>
              </div>
              <div className={styles['showcase-info']}>
                <span className={styles['showcase-category']}>{project.category}</span>
                <h3 className={styles['showcase-title']}>{project.title}</h3>
                <p className={styles['showcase-desc']}>{project.description}</p>
                <div className={styles['showcase-author']}>
                  <span>{project.useCase}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
