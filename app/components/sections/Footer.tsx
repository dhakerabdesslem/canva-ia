import { BrandIcon } from "../icons/BrandIcon";
import styles from "../../styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles['foot-row']}>
          <div>
            <a className={styles.brand} href="#top">
              <BrandIcon className={styles['brand-mark']} />
              Canva & IA
            </a>
            <p className={styles['foot-tagline']}>
              Masterclass Productivité & IA sur Canva animée par Dhaker Abdesslem. Standardisez votre production d'équipe et exploitez le Studio Magique.
            </p>
          </div>
          <div className={styles['foot-links']}>
            <div className={styles['foot-col']}>
              <h5>Programme</h5>
              <a href="#curriculum">Les 5 Modules (4h)</a>

              <a href="#instructor">Votre Formateur</a>
              <a href="#testimonials">Avis des apprenants</a>
              <a href="#materials">Ressources incluses</a>
              <a href="#enroll">Tarifs & Inscription</a>
            </div>
            <div className={styles['foot-col']}>
              <h5>Contact & Infos</h5>
              <a href="#instructor">Dhaker Abdesslem (Formateur TOT)</a>
              <a href="#gallery">Livrables des élèves</a>
              <a href="#faq">Questions fréquentes</a>
              <a href="mailto:contact@canva-ia.tn">contact@canva-ia.tn</a>
            </div>
          </div>
        </div>
        <div className={styles['foot-bottom']}>© 2026 Masterclass Productivité & IA sur Canva — Dhaker Abdesslem. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
