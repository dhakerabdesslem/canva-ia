import { BentoCard } from "../BentoCard";
import { FigmaToolkitIcon, SaasUIStyleIcon } from "../icons/BentoIcons";
import { materialsData } from "../../data/content";
import styles from "../../styles.module.css";

export function MaterialsSection() {
  return (
    <section className="section section-dark" id="materials">
      <div className="wrap">
        <div className={`${styles['section-head']} reveal-on-scroll`}>
          <span className={`${styles.kicker} ${styles['section-dark-kicker']}`}>Ressources & Accès Inclus</span>
          <h2>Tout le matériel inclus dans la formation</h2>
          <p className="section-sub">
            5 semaines d'ateliers pratiques, accès illimité aux replays à vie, plus de 150 templates Canva prêts à l'emploi et notre guide exclusif de 100+ prompts IA.
          </p>
        </div>

        <div className={`${styles.bento} reveal-on-scroll`}>
          <div className={styles['col-stack']}>
            <BentoCard
              isSmall
              title={materialsData.anatomy.title}
              description={materialsData.anatomy.description}
            />
            <BentoCard
              isSmall
              title={materialsData.toolkit.title}
              description={materialsData.toolkit.description}
              visual={<FigmaToolkitIcon />}
            />
          </div>

          <BentoCard
            isTall
            title={materialsData.saas.title}
            description={materialsData.saas.description}
            visual={
              <div className={styles['bento-saas-visual']}>
                <SaasUIStyleIcon />
              </div>
            }
          />

          <div className={styles['col-stack']}>
            <BentoCard
              isSmall
              title={materialsData.gradients.title}
              description={materialsData.gradients.description}
              visual={
                <div className={styles['swatch-grid']}>
                  <div className={styles.swatch} style={{ background: "#8FE3FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#C9D3FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#5B7CFF" }}></div>
                  <div className={styles.swatch} style={{ background: "#33D6FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#B07CFF" }}></div>
                  <div className={styles.swatch} style={{ background: "#3E63FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#3E63FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#8FE3FF" }}></div>
                  <div className={styles.swatch} style={{ background: "#EAEEFF" }}></div>
                  <div className={styles.swatch} style={{ background: "#5B7CFF" }}></div>
                  <div className={styles.swatch} style={{ background: "#B07CFF" }}></div>
                  <div className={styles.swatch} style={{ background: "#33D6FF" }}></div>
                </div>
              }
            />
            <div className={`${styles.row} ${styles['b-right']}`}>
              <BentoCard
                isSmall
                bonus
                title={<h3 className={styles['bento-bonus-title']}>{materialsData.ai.title}</h3>}
                description={materialsData.ai.description}
              />
              <BentoCard
                isSmall
                bonus
                title={<h3 className={styles['bento-bonus-title']}>{materialsData.texture.title}</h3>}
                description={materialsData.texture.description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
