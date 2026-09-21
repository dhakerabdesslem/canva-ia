import { useState, useEffect } from "react";
import { useFetcher } from "react-router";
import { managerExpenseTemplate } from "../../data/content";
import { BrandIcon } from "../icons/BrandIcon";
import { Clock, Video, CheckCircle2, ShieldCheck } from "lucide-react";
import styles from "../../styles.module.css";

export function CtaSection() {
  const fetcher = useFetcher<{ success?: boolean; error?: string; message?: string }>();
  const isSubmitting = fetcher.state === "submitting";
  const isSuccess = fetcher.data?.success;

  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowExpenseModal(false);
    };
    if (showExpenseModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showExpenseModal]);

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash === "#enroll") {
        const input = document.getElementById("enroll-nom") as HTMLInputElement | null;
        if (input) {
          setTimeout(() => input.focus(), 350);
        }
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const copyTemplate = () => {
    const fullText = `Subject: ${managerExpenseTemplate.subject}\n\n${managerExpenseTemplate.body}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section className="cta-section" id="enroll">
      <div className="wrap" style={{ padding: "80px 20px" }}>
        
        <div className={styles['integrated-checkout-wrapper']}>
          
          {/* LEFT PANEL : BENEFITS & TRUST */}
          <div className={styles['integrated-checkout-info']}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: 800, marginBottom: '40px' }}>
              <BrandIcon className={styles['brand-mark']} style={{ width: '28px', height: '28px' }} />
              Canva & IA
            </div>

            <h2>Masterclass Productivité & IA</h2>
            
            <div className={styles['integrated-checkout-price-wrap']}>
              <div className={styles['integrated-checkout-price']}>120</div>
              <div className={styles['integrated-checkout-price-sub']}>DT / personne</div>
            </div>

            <div className={styles['integrated-checkout-features']}>
              <div className={styles['integrated-feature-item']}>
                <Clock className={styles['integrated-feature-icon']} />
                <div className={styles['integrated-feature-text']}>
                  <strong>4 Heures Intensives</strong>
                  Formation 100% pratique en direct, avec exercices chronométrés.
                </div>
              </div>
              <div className={styles['integrated-feature-item']}>
                <Video className={styles['integrated-feature-icon']} />
                <div className={styles['integrated-feature-text']}>
                  <strong>Replay à Vie & Certificat</strong>
                  Revoyez la session à tout moment et certifiez vos compétences.
                </div>
              </div>
              <div className={styles['integrated-feature-item']}>
                <CheckCircle2 className={styles['integrated-feature-icon']} />
                <div className={styles['integrated-feature-text']}>
                  <strong>1 Mois Canva Pro OFFERT</strong>
                  Accès premium inclus pour exploiter le Studio Magique.
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
              <button
                type="button"
                className={styles['expense-btn']}
                onClick={() => setShowExpenseModal(true)}
                style={{ textAlign: 'left', border: 'none', padding: 0, opacity: 0.8 }}
              >
                💼 Prise en charge entreprise (400 DT) ? Voir le modèle
              </button>
            </div>
          </div>

          {/* RIGHT PANEL : FORM */}
          <div className={styles['integrated-checkout-form']}>
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', marginBottom: '24px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Réservation Validée !</h3>
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '32px' }}>
                  {fetcher.data?.message} <br/><br/>
                  Vérifiez votre boîte mail pour procéder au paiement final.
                </p>
              </div>
            ) : (
              <>
                <div className={styles['integrated-form-header']}>
                  <h3>Vos coordonnées</h3>
                  <p>Réservez votre place pour recevoir les instructions de paiement sécurisé (D17, Flouci, Virement).</p>
                </div>

                <fetcher.Form method="post">
                  <div className={styles['integrated-form-row']}>
                    <div className={styles['integrated-field']} style={{ marginBottom: 0 }}>
                      <label htmlFor="enroll-prenom" className={styles['integrated-label']}>Prénom</label>
                      <input type="text" id="enroll-prenom" name="prenom" required placeholder="John" className={styles['integrated-input']} disabled={isSubmitting} />
                    </div>
                    <div className={styles['integrated-field']} style={{ marginBottom: 0 }}>
                      <label htmlFor="enroll-nom" className={styles['integrated-label']}>Nom</label>
                      <input type="text" id="enroll-nom" name="nom" required placeholder="Doe" className={styles['integrated-input']} disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className={styles['integrated-field']}>
                    <label htmlFor="enroll-email" className={styles['integrated-label']}>Email professionnel</label>
                    <input type="email" id="enroll-email" name="email" required placeholder="john@entreprise.com" className={styles['integrated-input']} disabled={isSubmitting} />
                  </div>

                  <div className={styles['integrated-field']}>
                    <label htmlFor="enroll-numero" className={styles['integrated-label']}>Téléphone (WhatsApp)</label>
                    <input type="tel" id="enroll-numero" name="numero" required placeholder="50 123 456" className={styles['integrated-input']} disabled={isSubmitting} />
                  </div>

                  {fetcher.data?.error && (
                    <div style={{ padding: '12px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                      {fetcher.data.error}
                    </div>
                  )}

                  <button type="submit" className={styles['integrated-submit']} disabled={isSubmitting}>
                    {isSubmitting ? "Traitement..." : "Confirmer ma réservation"}
                  </button>

                  <div className={styles['integrated-secure-badge']}>
                    <ShieldCheck size={16} />
                    <span>Vos données sont sécurisées et chiffrées</span>
                  </div>
                </fetcher.Form>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Employer Expense Modal */}
      {showExpenseModal && (
        <div
          className={styles['modal-backdrop']}
          onClick={() => setShowExpenseModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-expense-title"
        >
          <div
            className={styles['modal-content']}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles['modal-close']}
              onClick={() => setShowExpenseModal(false)}
              aria-label="Fermer la boîte de dialogue"
            >
              ✕
            </button>
            <h3 id="modal-expense-title" className={styles['modal-title']}>
              Modèle d'Email pour Demande de Prise en Charge
            </h3>
            <p className={styles['modal-sub']}>
              De nombreux apprenants se font financer leur participation par leur employeur au titre du budget formation continue. Copiez ce texte :
            </p>
            <div className={styles['modal-pre']}>
              <strong>Objet :</strong> {managerExpenseTemplate.subject}
              {"\n\n"}
              {managerExpenseTemplate.body}
            </div>
            <button
              type="button"
              className={`${styles['copy-btn']}${copied ? ` ${styles.copied}` : ''}`}
              onClick={copyTemplate}
            >
              {copied ? "✓ Modèle copié dans le presse-papier !" : "Copier le modèle d'email"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
