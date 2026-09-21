import type { ReactNode } from "react";
import styles from "../styles.module.css";

interface BentoCardProps {
  title: ReactNode; // Can be string or JSX like <h4 style={{fontSize: '14.5px'}}>
  description: string;
  visual?: ReactNode;
  isTall?: boolean;
  isSmall?: boolean;
  bonus?: boolean;
  children?: ReactNode; // for custom layouts in the visual area
}

export function BentoCard({
  title,
  description,
  visual,
  isTall = false,
  isSmall = false,
  bonus = false,
  children
}: BentoCardProps) {
  let className = styles['bento-card'];
  if (isTall) className += ` ${styles['b-tall']}`;
  if (isSmall) className += ` ${styles.small}`;

  return (
    <div className={className}>
      {typeof title === "string" ? <h4>{title}</h4> : title}
      <p>{description}</p>
      
      {bonus && <span className={styles['tag-bonus']}>✦ Bonus</span>}
      
      {visual && (
        <div className={styles['bento-visual']}>
          {visual}
        </div>
      )}
      
      {children}
    </div>
  );
}
