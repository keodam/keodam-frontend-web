import styles from "./LandingHeader.module.less";

const LandingHeader = () => {
  return (
    <div className={styles.landingHeader}>
      <div className={styles.contents}>
        <div>로고</div>
        <div>다운로드</div>
      </div>
    </div>
  );
};

export default LandingHeader;
