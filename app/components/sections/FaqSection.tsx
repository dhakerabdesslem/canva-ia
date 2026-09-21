import { useState } from "react";
import { faqData } from "../../data/content";
import styles from "../../styles.module.css";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={`section ${styles['faq-section']}`} id="faq">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={`${styles.kicker} ${styles['section-dark-kicker']}`}>Foire Aux Questions</span>
          <h2>Tout ce que vous devez savoir</h2>
          <p className="section-sub">
            Modalités de paiement en Tunisie (D17, Flouci, Konnect, Virement), niveau requis, replays et accompagnement personnalisé.
          </p>
        </div>

        {/* Live Search Input */}
        <div className={`${styles['faq-search-wrap']} reveal-on-scroll`}>
          <svg className={styles['faq-search-icon']} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Rechercher une question (ex: D17, débutant, certificat, horaires)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles['faq-search-input']}
            aria-label="Rechercher dans les questions fréquentes"
          />
        </div>

        <div className={`${styles['faq-list']} reveal-on-scroll`}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, i) => {
              // If searching, auto-expand matching questions
              const isOpen = searchQuery ? true : openIndex === i;
              return (
                <div
                  key={i}
                  className={`${styles['faq-item']}${isOpen ? ` ${styles['faq-open']}` : ''}`}
                >
                  <button
                    type="button"
                    className={styles['faq-trigger']}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span>{item.question}</span>
                    <span className={styles['faq-icon']} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className={styles['faq-body']}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", padding: "32px", color: "var(--ink-300)" }}>
              <p>Aucune question ne correspond à "{searchQuery}".</p>
              <p style={{ marginTop: "8px", fontSize: "13px" }}>
                Vous avez une autre question ? Contactez Mehdi directement à{" "}
                <a href="mailto:contact@canva-ia.tn" style={{ color: "var(--cyan-400)", textDecoration: "underline" }}>
                  contact@canva-ia.tn
                </a>{" "}
                ou par WhatsApp au +216 50 123 456
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
