import { testimonialsData } from "../../data/content";
import styles from "../../styles.module.css";

export function TestimonialsSection() {
  return (
    <section className={`section ${styles['testimonials-section']}`} id="testimonials">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={`${styles.kicker} ${styles['section-dark-kicker']}`}>Retours d'Expérience</span>
          <h2>Recommandé par les créateurs & entrepreneurs en Tunisie</h2>
          <p className="section-sub">
            Découvrez comment des entrepreneurs, community managers, e-commerçants et freelances à Tunis, Sousse et Sfax ont multiplié leur impact visuel et leurs ventes.
          </p>
        </div>

        <div className={styles['testimonials-grid']}>
          {testimonialsData.map((item, i) => (
            <div
              key={i}
              className={`${styles['testimonial-card']} reveal-on-scroll`}
              data-stagger-delay={`${i * 120}ms`}
            >
              <div>
                <span className={styles['testimonial-highlight']}>
                  “{item.highlight}”
                </span>
                <p className={styles['testimonial-quote']}>
                  "{item.quote}"
                </p>
              </div>
              <div className={styles['testimonial-author']}>
                <div className={styles['testimonial-avatar']}>
                  {item.avatar}
                </div>
                <div className={styles['testimonial-meta']}>
                  <span className={styles['testimonial-name']}>{item.name}</span>
                  <span className={styles['testimonial-role']}>
                    {item.role} · {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles['testimonial-stats']} reveal-on-scroll`}>
          <div className={styles['stat-item']}>
            <span className={styles['stat-number']}>4.96 / 5</span>
            <span className={styles['stat-label']}>Satisfaction des participants</span>
          </div>
          <div className={styles['stat-item']}>
            <span className={styles['stat-number']}>4h</span>
            <span className={styles['stat-label']}>Formation intensive 100% pratique</span>
          </div>
          <div className={styles['stat-item']}>
            <span className={styles['stat-number']}>1 Mois</span>
            <span className={styles['stat-label']}>Canva Pro OFFERT inclus</span>
          </div>
          <div className={styles['stat-item']}>
            <span className={styles['stat-number']}>À vie</span>
            <span className={styles['stat-label']}>Accès illimité au support de cours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
