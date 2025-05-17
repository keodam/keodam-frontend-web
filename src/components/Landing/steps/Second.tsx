import styles from "./Second.module.less";

const Second = () => {
  return(
  <div className={styles.second}>
    <div className={styles.box}>
      <div>한잔의 <span className={styles.color}>커</span>피</div>
      <div>무한한 가능성의 <span className={styles.color}>담</span>소</div>
    </div>
  </div>);
};

export default Second;
