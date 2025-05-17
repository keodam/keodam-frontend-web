import styles from "./Fourth.module.less";

const Fourth = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.section}>
        <div className={styles.content}>d</div>
        <div className={styles.video}>video</div>
      </div>
      <div className={styles.section}> section2</div>
      <div className={styles.section}> section3</div>
      <div className={styles.section}> section4</div>
    </div>
  );
};

export default Fourth;
