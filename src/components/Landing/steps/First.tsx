import { style } from "framer-motion/client";
import styles from "./First.module.less";

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.contents}>
        <div className={styles.content}>
          <div>프로필 확인을 통해 마음에 드는 사람 찾기</div>
        </div>
        <div className={styles.assets}>
          <div>사진이나 동영상 삽입</div>
        </div>
      </div>
    </div>
  );
};

export default First;
