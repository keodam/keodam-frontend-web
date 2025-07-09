import React from 'react';
import styles from "./DashCard.module.less"


interface DashCardProps {
  icon: React.ReactNode;
  label: string;
  count: number | string;
}

const DashCard: React.FC<DashCardProps> = ({icon, label, count}) => {
    return(
    <div className={styles.card}> 
        <div className={styles.top}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
        </div>
        <div className={styles.count}>
            {count}건
        </div>
     </div>

)}
export default DashCard;
