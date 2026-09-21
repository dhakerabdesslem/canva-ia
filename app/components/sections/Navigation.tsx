import { useState, useEffect } from "react";
import { Link } from "react-router";
import { BrandIcon } from "../icons/BrandIcon";
import styles from "../../styles.module.css";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showPill, setShowPill] = useState(false);
  const [dismissPill, setDismissPill] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissPill) {
        setShowPill(window.scrollY > 450);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissPill]);

  useEffect(() => {
    const sections = ["curriculum", "instructor", "gallery", "testimonials", "materials", "faq", "enroll"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className="wrap">
          <a className={styles.brand} href="#top">
            <BrandIcon className={styles['brand-mark']} />
            Canva & IA
          </a>
          <div className={styles['nav-desktop']}>
            <div className={styles['nav-links']}>
              <a
                href="#curriculum"
                className={activeSection === "curriculum" ? styles['nav-active'] : ""}
              >
                Programme
              </a>

              <a
                href="#instructor"
                className={activeSection === "instructor" ? styles['nav-active'] : ""}
              >
                Formateur
              </a>
              <a
                href="#gallery"
                className={activeSection === "gallery" ? styles['nav-active'] : ""}
              >
                Projets
              </a>
              <a
                href="#testimonials"
                className={activeSection === "testimonials" ? styles['nav-active'] : ""}
              >
                Avis
              </a>
              <a
                href="#materials"
                className={activeSection === "materials" ? styles['nav-active'] : ""}
              >
                Ressources
              </a>
              <a
                href="#faq"
                className={activeSection === "faq" ? styles['nav-active'] : ""}
              >
                FAQ
              </a>
              <a
                href="#enroll"
                className={activeSection === "enroll" ? styles['nav-active'] : ""}
              >
                Tarifs
              </a>
            </div>
            <a className={styles['nav-cta']} href="#enroll">Réserver ma place</a>
          </div>
          <button
            className={`${styles.hamburger}${isOpen ? ` ${styles.open}` : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`${styles['mobile-drawer']}${isOpen ? ` ${styles.open}` : ''}`}>
          <a href="#curriculum" onClick={closeMenu}>Programme</a>

          <a href="#instructor" onClick={closeMenu}>Formateur</a>
          <a href="#gallery" onClick={closeMenu}>Projets</a>
          <a href="#testimonials" onClick={closeMenu}>Avis</a>
          <a href="#materials" onClick={closeMenu}>Ressources</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#enroll" onClick={closeMenu}>Tarifs</a>
          <a className={styles['nav-cta']} href="#enroll" onClick={closeMenu} style={{ marginTop: '12px' }}>
            Réserver ma place (120 DT)
          </a>
        </div>
      </nav>

      {/* Floating Cohort Urgency Micro-Pill */}
      {showPill && !dismissPill && (
        <div className={styles['floating-cohort-pill']} role="status">
          <div className={styles['pill-pulse']} aria-hidden="true"></div>
          <span className={styles['pill-text']}>
            <span className={styles['pill-text-desktop']}>Masterclass Dhaker Abdesslem · <strong>120 DT (Canva Pro offert)</strong></span>
            <span className={styles['pill-text-mobile']}>Masterclass · <strong>120 DT</strong></span>
          </span>
          <a href="#enroll" className={styles['pill-cta']}>
            Réserver →
          </a>
          <button
            type="button"
            className={styles['pill-close']}
            onClick={() => setDismissPill(true)}
            aria-label="Fermer l'annonce"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
