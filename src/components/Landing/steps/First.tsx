import { style } from "framer-motion/client";
import styles from "./First.module.less";

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.contents}>
        <div className={styles.content}></div>
        <div className={styles.assets}></div>
      </div>
    </div>
  );
};

export default First;
