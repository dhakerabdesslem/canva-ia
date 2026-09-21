import type { ReactNode } from "react";
import styles from "../styles.module.css";

interface SkillCardProps {
  title: string;
  description?: string;
  icon: ReactNode;
}

export function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div className={styles['skill-card']}>
      <div className={styles.art}>
        {icon}
      </div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
