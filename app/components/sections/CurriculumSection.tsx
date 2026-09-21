import { useState } from "react";
import { SkillCard } from "../SkillCard";
import { curriculumData, weeklySyllabusData } from "../../data/content";
import styles from "../../styles.module.css";

export function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(1);
  const currentModuleData = weeklySyllabusData.find(m => m.moduleNumber === activeModule) || weeklySyllabusData[0];

  return (
    <section className="section section-light" id="curriculum">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={styles.kicker}>Programme de la Masterclass</span>
          <h2>Aperçu général des 5 modules (4h Intensives)</h2>
          <p className="section-sub">
            Une approche globale et concrète : collaboration d'agence, automatisation de formats, Studio Magique IA, atelier pratique chronométré et formats d'exportation.
          </p>
        </div>

        <div className={`${styles['card-grid']} ${styles['grid-4']}`}>
          {curriculumData.map((item, i) => (
            <div key={i} className="reveal-on-scroll" data-stagger-delay={`${i * 100}ms`}>
              <SkillCard title={item.title} description={item.description} icon={item.icon} />
            </div>
          ))}
        </div>

        {/* 5-Module General Overview */}
        <div className={`${styles['syllabus-box']} reveal-on-scroll`}>
          <div className={styles['syllabus-header']}>
            <div>
              <h3>Aperçu Général des 5 Modules</h3>
              <p>Cliquez sur chaque module pour découvrir les compétences clés transmises lors de la masterclass.</p>
            </div>
            <div className={styles['week-tabs']} role="tablist" aria-label="Modules de la masterclass">
              {weeklySyllabusData.map((m) => (
                <button
                  key={m.moduleNumber}
                  type="button"
                  role="tab"
                  aria-selected={activeModule === m.moduleNumber}
                  className={`${styles['week-tab-btn']}${activeModule === m.moduleNumber ? ` ${styles.active}` : ''}`}
                  onClick={() => setActiveModule(m.moduleNumber)}
                >
                  Module {m.moduleNumber}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['week-content-card']} role="tabpanel" tabIndex={0}>
            <div className={styles['week-card-top']}>
              <span className={styles['week-badge']}>
                Module {currentModuleData.moduleNumber} sur 5
              </span>
              <span className={styles['week-duration']}>
                ⏱️ Durée : {currentModuleData.duration}
              </span>
            </div>
            <h4 className={styles['week-title']}>{currentModuleData.title}</h4>
            <p className={styles['module-overview-text']}>{currentModuleData.overview}</p>

            <div className={styles['module-pills-row']}>
              {currentModuleData.keyPoints.map((point, idx) => (
                <span key={idx} className={styles['module-pill-tag']}>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>

            <div className={styles['week-deliverable']}>
              <span className={styles['week-deliverable-label']}>Livrable Clé</span>
              <span className={styles['week-deliverable-text']}>{currentModuleData.deliverable}</span>
            </div>

            <div className={styles['week-nav-row']}>
              <button
                type="button"
                className={styles['week-nav-btn']}
                disabled={activeModule === 1}
                onClick={() => setActiveModule(prev => Math.max(1, prev - 1))}
                aria-label="Module précédent"
              >
                ← Module précédent
              </button>
              <span className={styles['week-nav-indicator']}>
                Module {activeModule} sur {weeklySyllabusData.length}
              </span>
              <button
                type="button"
                className={styles['week-nav-btn']}
                disabled={activeModule === weeklySyllabusData.length}
                onClick={() => setActiveModule(prev => Math.min(weeklySyllabusData.length, prev + 1))}
                aria-label="Module suivant"
              >
                Module suivant →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
