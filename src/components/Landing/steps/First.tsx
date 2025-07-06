// import LandingHeader from "../LandingHeader";
import styles from "./First.module.less";
import Logo from '../../../assets/Landing/헤더 로고.svg'
import LangingLogo from "../../../assets/Landing/첫 페이지 로고.svg"
// import LandingHeader from "../LandingHeader";
const First = () => {
  return(
  <div className={styles.secondPage}>
    <div className={styles.second}>
      {/* <LandingHeader/> */}
     <div className={styles.header}>
      <div className={styles.logo}>
        {/* <img src={Logo} alt="헤더 로고" className={styles.logoImg}/> */}
      </div>
      <div className={styles.downButton}>앱 다운로드</div>
    </div>
    <div className={styles.box}>
      <div>한잔의 커피</div>
      <div>무한한 가능성의 담소</div>
    </div>
    <div className={styles.logo}>
      <img src={LangingLogo} alt="첫 랜딩페이지 로고"/>
    </div>
    <div className={styles.buttonBox}>
      <div className={styles.button}>#커피챗</div>
      <div className={styles.button}>#멘토/멘티</div>
      <div className={styles.button}>#원두</div>
    </div>
    </div>
  </div>);
};

export default First;
