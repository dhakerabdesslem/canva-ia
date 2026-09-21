import type { ReactNode } from "react";
import styles from "../styles.module.css";

interface WhyCardProps {
  title: string;
  description?: string;
  icon: ReactNode;
}

export function WhyCard({ title, description, icon }: WhyCardProps) {
  return (
    <div className={styles['why-card']}>
      <div className={styles.art}>
        {icon}
      </div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
