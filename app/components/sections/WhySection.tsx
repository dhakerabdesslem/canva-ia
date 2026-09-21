import { WhyCard } from "../WhyCard";
import { whyData } from "../../data/content";
import styles from "../../styles.module.css";

export function WhySection() {
  return (
    <section className="section section-light section-fade-blue">
      <div className={styles['fade-grid']}></div>
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={styles.kicker}>Pourquoi Canva & L'IA ?</span>
          <h2>L'IA sans méthode ne suffit pas</h2>
          <p className="section-sub">
            Un prompt génère une image brute, mais c'est dans Canva que vous y intégrez votre logo, votre typographie, votre offre et votre appel à l'action pour vendre.
          </p>
        </div>

        <div className={`${styles['card-grid']} ${styles['grid-3']}`}>
          {whyData.map((item, i) => (
            <div key={i} className="reveal-on-scroll" data-stagger-delay={`${i * 120}ms`}>
              <WhyCard title={item.title} description={item.description} icon={item.icon} />
            </div>
          ))}
        </div>

        <div className={`${styles['closing-node']} reveal-on-scroll`}>
          <svg className={styles['node-lines']} viewBox="0 0 196 46" preserveAspectRatio="none" aria-hidden="true">
            <path d="M98 2 V22" />
            <path d="M26 22 H170" />
            <path d="M26 22 V34" />
            <path d="M98 22 V34" />
            <path d="M170 22 V34" />
            <circle cx="98" cy="2" r="3" fill="#fff" />
          </svg>
          <div className={styles['node-row']}>
            <div className={styles['node-box']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
            <div className={`${styles['node-box']} ${styles.main}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 20 7.5 20 16.5 12 22 4 16.5 4 7.5Z" stroke="#3E63FF" strokeWidth="1.5" />
                <path d="M12 2V22M4 7.5L20 16.5M20 7.5L4 16.5" stroke="#3E63FF" strokeWidth="1" opacity="0.55" />
              </svg>
            </div>
            <div className={styles['node-box']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
          </div>
          <p className={styles['closing-copy']}>
            C'est pourquoi maîtriser Canva et l'IA ensemble est la compétence la plus rentable aujourd'hui en Tunisie : vous alliez la rapidité de l'intelligence artificielle et l'impact d'un design professionnel.
          </p>
        </div>
      </div>
    </section>
  );
}
