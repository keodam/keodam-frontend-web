import styles from "./LandingHeader.module.less";
import Logo from "../../assets/Landing/헤더 로고.svg"


interface LandingHeaderProps {
  step: number;
  setStep: (step: number, scrollToSection3?: boolean) => void;
}

const LandingHeader = ({ step, setStep }: LandingHeaderProps) => {
  const isScrolled = step >= 1; // Second 이상이면 스타일 변경

  return (
    <div className={`${styles.header} ${isScrolled ? styles.active : ""}`}>
      <div className={styles.logo} onClick={() => window.location.reload()}>
        <img src={Logo} alt="헤더 로고" className={styles.logoImg} />
      </div>
      <div 
        className={styles.downButton}
        onClick={() => setStep(3, true)}>
          앱 다운로드
      </div>
    </div>
  );
};

export default LandingHeader;
