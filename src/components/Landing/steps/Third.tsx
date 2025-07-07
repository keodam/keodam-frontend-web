import { style } from "framer-motion/client";
import styles from "./Third.module.less";
import 프로필 from '../../../assets/Landing/3페이지 프로필.png'
import 토글버튼 from '../../../assets/Landing/3페이지 변경.png'
import useObserver from "../../../hooks/useObserver";
const Third = () => {
  const obs1 = useObserver();
  const obs2 = useObserver();

  return (
    <div className={styles.first}>
      <div className={styles.total}>
      <div ref={obs1.ref} className={`${styles.contents} ${obs1.show ? styles.animate : styles.hidden}`}>
        <div className={styles.content}>
          <div className={styles.title1}><span className={styles.color}>프로필</span> 확인을 통해 <br></br>본인에게 적합한 멘토 찾기</div>
          <div>내게 꼭 맞는 멘토와 멘토, 지금 바로 만나보세요. <br></br>관심분야, 거리, 학교, 경험까지<br></br>내가 원하는 조건 딱 맞는 연결이 기다리고 있어요.</div>
        </div>
        <div className={styles.assets}>
          <div><img src={프로필} alt="프로필 모음 사진" className={styles.logoImg}/></div>
        </div>
      </div>
      <div ref={obs2.ref} className={`${styles.contents} ${obs2.show ? styles.animate : styles.hidden}`}>
        <div className={styles.assets}>
          <img src={토글버튼} alt="프로필 토글 전환" className={styles.logoImg}/>
        </div>
        <div className={styles.content}>
          <div className={styles.title2}><span className={styles.color}>멘토 멘티 </span><br></br>자유로운 전환</div>
          <div className={styles.titleContent}>취업은 멘토에게 묻고, 학교 생활은 멘티에게 나누고<br></br>커피챗을 통해 서로에게 힘이 되어주는 공간이 됩니다. </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Third;
