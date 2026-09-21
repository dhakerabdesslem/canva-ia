import { instructorData } from "../../data/content";
import styles from "../../styles.module.css";

export function InstructorSection() {
  return (
    <section className={`section ${styles['instructor-section']}`} id="instructor">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={`${styles.kicker} ${styles['section-dark-kicker']}`}>À Propos du Formateur</span>
          <h2>Qui animera votre Masterclass ?</h2>
          <p className="section-sub">
            Cette session sera animée par un expert alliant compétences techniques, marketing et communicationnelles pour vous transmettre une méthodologie directement applicable.
          </p>
        </div>

        <div className={`${styles['instructor-card']} reveal-on-scroll`}>
          <div className={styles['instructor-grid']}>
            <div className={styles['instructor-left']}>
              <div className={styles['instructor-avatar']} aria-hidden="true">
                DA
              </div>
              <h3 className={styles['instructor-name']}>{instructorData.name}</h3>
              <p className={styles['instructor-role']}>{instructorData.role}</p>

              <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(51, 214, 255, 0.12)', border: '1px solid rgba(51, 214, 255, 0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', color: 'var(--cyan-400)', fontWeight: 600 }}>
                <span>✓ Formateur Certifié (TOT) · Octobre 2025</span>
              </div>

              {/* Social Media Links */}
              <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <a
                  href={instructorData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['company-chip']}
                  style={{ textDecoration: 'none', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74 0 .96.78 1.74 1.74 1.74s1.74-.78 1.74-1.74c0-.96-.78-1.74-1.74-1.74Z"/></svg>
                  LinkedIn
                </a>
                <a
                  href={instructorData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['company-chip']}
                  style={{ textDecoration: 'none', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                  Facebook
                </a>
                <a
                  href={instructorData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['company-chip']}
                  style={{ textDecoration: 'none', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
              </div>

              <div className={styles['instructor-past-label']}>Parcours & Références</div>
              <div className={styles['instructor-companies']}>
                {instructorData.pastWorkWith.map((company, i) => (
                  <span key={i} className={styles['company-chip']}>{company}</span>
                ))}
              </div>
            </div>

            <div className={styles['instructor-right']}>
              <p className={styles['instructor-quote']}>
                "{instructorData.quote}"
              </p>
              <p className={styles['instructor-bio']}>
                {instructorData.bio}
              </p>

              <div className={styles['instructor-metrics']}>
                {instructorData.credentials.map((cred, i) => (
                  <div key={i} className={styles['metric-box']}>
                    <b>{cred.value}</b>
                    <span>{cred.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
