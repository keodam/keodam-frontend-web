import styles from "./First.module.less";
import HeaderLogo from "../../../assets/Landing/헤더 로고.svg"
import LangingLogo from '../../../assets/Landing/첫 페이지 로고.svg';

interface FirstProps {
  setStep: (step: number) => void;
}

const First = ({ setStep }: FirstProps) => {
  return (
    <div className={styles.firstWrapper}>
      <div className={styles.innerBox}>
        <div className={styles.topArea}>
          <div className={styles.headerLogo}>
            <img className={styles.img} src={HeaderLogo} alt="헤더로고"/>
          </div>
          <div className={styles.downloadButton} onClick={() => setStep(3)}>
            앱 다운로드
          </div>
        </div>
        <div className={styles.centerContent}>
          <div className={styles.mainText}>
            <div>한잔의 커피</div>
            <div>무한한 가능성의 담소</div>
          </div>

          <div className={styles.logoArea}>
            <img src={LangingLogo} alt="첫 랜딩페이지 로고" />
          </div>

          <div className={styles.buttonBox}>
            <div className={styles.button} onClick={() => setStep(1)}>#커피챗</div>
            <div className={styles.button} onClick={() => setStep(2)}>#멘토/멘티</div>
            <div className={styles.button} onClick={() => setStep(3)}>#원두</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;