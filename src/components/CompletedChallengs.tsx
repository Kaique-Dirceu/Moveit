import styles from '../styles/components/CompletedChalleges.module.css';

export function CompletedChallenges() {
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}