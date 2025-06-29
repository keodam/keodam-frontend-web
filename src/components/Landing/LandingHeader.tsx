import styles from "./LandingHeader.module.less";
import Logo from "../../assets/Landing/헤더 로고.svg"
const LandingHeader = () => {
  return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="헤더 로고" className={styles.logoImg}/>
        </div>
        <div className={styles.downButton}>앱 다운로드</div>
      </div>
    // <div className={styles.landingHeader}>
    //   <div className={styles.contents}>
    //     <div>로고</div>
    //     <div>다운로드</div>
    //   </div>
    // </div>
  );
};

export default LandingHeader;
