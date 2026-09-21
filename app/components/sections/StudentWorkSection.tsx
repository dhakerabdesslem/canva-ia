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
    svgVisual: <img src="/project-1.svg" alt="Pack Branding" className={styles['showcase-svg']} aria-hidden="true" loading="lazy" />
  },
  {
    title: "Campagne Sponsorisée Coffee Shop & Brunch",
    category: "Réseaux Sociaux & Ads",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : Restauration, Cafés & Événements",
    description: "Visuels Meta Ads 9:16 et 1:1, détourage automatique Magic Studio, vapeur et grains de café insérés par prompt IA réaliste.",
    svgVisual: <img src="/project-2.svg" alt="Coffee Shop Ad" className={styles['showcase-svg']} aria-hidden="true" loading="lazy" />
  },
  {
    title: "Carrousel LinkedIn B2B & Storytelling RH",
    category: "Content Marketing & B2B",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : B2B, Cabinets & Formateurs",
    description: "Carrousel viral de 7 slides rédigé via ChatGPT et mis en page en 15 minutes sur Canva avec charte graphique professionnelle.",
    svgVisual: <img src="/project-3.svg" alt="LinkedIn Carousel" className={styles['showcase-svg']} aria-hidden="true" loading="lazy" />
  },
  {
    title: "Catalogue Produits & Dépliant Interactif",
    category: "Documents & Vente",
    tag: "Livrable Pratique",
    useCase: "Cas d'usage : Commerces, Catalogues & Print",
    description: "Catalogue numérique interactif Canva avec liens WhatsApp directs, QR code pour commande et gabarit prêt à l'impression offset.",
    svgVisual: <img src="/project-4.svg" alt="Catalog" className={styles['showcase-svg']} aria-hidden="true" loading="lazy" />
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
