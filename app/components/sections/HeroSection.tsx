import { HeroLinesIcon } from "../icons/HeroLinesIcon";
import styles from "../../styles.module.css";

export function HeroSection() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles['hero-grid']}></div>
      <div className="wrap">
        <span className={`${styles.pill} reveal-on-scroll`}>
          <span className={styles['pill-dot']}></span>Masterclass Productivité & IA sur Canva · 4h Intensives
        </span>
        <h1 className="reveal-on-scroll">
          Accélérez votre production visuelle,<br className={styles['desktop-br']} />
          <span className="soft">grâce à la productivité & l'IA sur Canva.</span>
        </h1>
        <p className={`${styles['hero-sub']} reveal-on-scroll`}>
          Animée par <strong>Dhaker Abdesslem</strong> (Formateur Certifié TOT & Community Manager). Une demi-journée 100% pratique pour standardiser vos créations d'agence, automatiser vos déclinaisons et maîtriser le Studio Magique.
        </p>
        <div className={`${styles['hero-ctas']} reveal-on-scroll`}>
          <a className="btn btn-primary" href="#enroll">Réserver ma place (120 DT)</a>
          <a className="btn btn-ghost" href="#curriculum">Voir les 5 modules (4h)</a>
        </div>
        <p className={`${styles['hero-trust']} reveal-on-scroll`}>
          🎁 <b>1 mois Canva Pro OFFERT</b> inclus · Accès illimité à vie au support de cours · Tarif Groupe Partenariat disponible
        </p>

        <div className={`${styles['hero-stage']} reveal-on-scroll`}>
          <HeroLinesIcon className={styles['hero-lines']} />

          <div className={styles.chip} style={{ left: '6%', top: '26%', animationDelay: '0s' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="4" rx="1.5" />
              <rect x="3" y="10" width="12" height="4" rx="1.5" />
              <rect x="3" y="16" width="8" height="4" rx="1.5" />
            </svg>
            Magic Studio
          </div>
          <div className={`${styles.chip} ${styles.mono}`} style={{ left: '2%', top: '56%', animationDelay: '.6s' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px' }}>IA</span>
          </div>
          <div className={styles.chip} style={{ left: '8%', top: '82%', animationDelay: '1.2s' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
            </svg>
            Prompts Visuels
          </div>
          <div className={`${styles.chip} ${styles.mono}`} style={{ right: '4%', top: '22%', animationDelay: '.9s' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2l1.8 5.6H20l-4.8 3.5 1.8 5.6L12 13.2 7 16.7l1.8-5.6L4 7.6h6.2z" />
            </svg>
          </div>
          <div className={styles.chip} style={{ right: '0%', top: '55%', animationDelay: '.3s' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
            Carrousels Insta
          </div>
          <div className={styles.chip} style={{ right: '5%', top: '80%', animationDelay: '1.5s' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 19l6-6M20 5l-5.5 1.5L13 12l6-1.5L21 5z" />
              <circle cx="8" cy="16" r="2" />
            </svg>
            E-commerce
          </div>

          <div className={styles['stage-center']}>
            <div className={styles.badge}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 20 7.5 20 16.5 12 22 4 16.5 4 7.5Z" stroke="#fff" strokeWidth="1.5" />
                <path d="M12 2V22M4 7.5L20 16.5M20 7.5L4 16.5" stroke="#fff" strokeWidth="1" opacity="0.55" />
              </svg>
            </div>
            <div className={styles['label-row']}>
              <span>Canva Pro & IA Générative</span>
              <span>100% Pratique</span>
            </div>
            <div className={styles['stage-bar']}><i></i></div>
            <div className={styles['stage-icons']}>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 12l8-8 8 8-8 8z" />
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </span>
            </div>
          </div>

          <div className={styles['demo-cursor']}>
            <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M4 3l14 6.5-5.8 2-2 5.8z" />
            </svg>
          </div>
          <span className={`${styles['demo-tooltip']} ${styles.tt1}`}>Layers</span>
          <span className={`${styles['demo-tooltip']} ${styles.tt2}`}>Appearance</span>
          <span className={`${styles['demo-tooltip']} ${styles.tt3}`}>Style</span>
          <span className={`${styles['demo-tooltip']} ${styles.tt4}`}>Export</span>
        </div>
      </div>
    </header>
  );
}
