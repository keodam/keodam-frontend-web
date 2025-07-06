import LeftNavBar from "../../../components/Admin/LeftNavBar";
import styles from "./HistoryPage.module.less";

const HistoryPage = () => {
  return (
    <div className={styles.historyPage}>
      <LeftNavBar />
      <div className={styles.contents}>
      <div className={styles.title}> 처리이력 </div>
      
      </div>
    </div>
  );
};

export default HistoryPage;
