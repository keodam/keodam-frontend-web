import { useEffect, useState } from "react";
import styles from "./First.module.less";
import HeaderLogo from "../../../assets/Landing/헤더 로고.svg";
import LandingLogo from "../../../assets/Landing/첫 페이지 로고.svg";

interface FirstProps {
  setStep: (step: number, scrollToSection3?: boolean) => void;
}

const First = ({ setStep }: FirstProps) => {
  const [glowIndex, setGlowIndex] = useState<number | null>(null);

  useEffect(() => {
    const delays = [0, 2400, 4800]; // 각 버튼 활성화 시간차 (ms)
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setGlowIndex(index);
      }, delay);
    });
  }, []);

  return (
    <div className={styles.firstWrapper}>
      <div className={styles.blurCircle}></div>
      <div className={styles.innerBox}>
        <div className={styles.topArea}>
          <div className={styles.headerLogo} onClick={() => window.location.reload()}>
            <img className={styles.img} src={HeaderLogo} alt="헤더로고" />
          </div>
          <div className={styles.downloadButton} onClick={() => setStep(3, true)}>
            앱 다운로드
          </div>
        </div>

        <div className={styles.centerContent}>
          <div className={styles.mainText}>
            <div>한잔의 커피</div>
            <div>무한한 가능성의 담소</div>
          </div>

          <div className={styles.logoArea}>
            <img src={LandingLogo} alt="첫 랜딩페이지 로고" />
          </div>

          <div className={styles.buttonBox}>
            {["#커피챗", "#멘토/멘티", "#원두"].map((label, index) => (
              <div
                key={index}
                className={`${styles.button} ${styles.glow} ${glowIndex === index ? styles.glowActive : ""}`}
                onClick={() => setStep(index + 1)}
              >
                {label}
              </div>
            ))}
          </div>

          <div className={styles.scrollHint} onClick={() => setStep(1)}>
            스크롤해서 더 보기 ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
