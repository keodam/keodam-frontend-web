import LeftNavBar from "../../../components/Admin/LeftNavBar";
import styles from "./HistoryPage.module.less";
import HistoryTable from "./HistoryTable";

const HistoryPage = () => {
  return (
    <div className={styles.historyPage}>
      <LeftNavBar />
      <div className={styles.contents}>
      <div className={styles.title}> 처리이력 </div>
      <HistoryTable/>
      </div>
    </div>
  );
};

export default HistoryPage;
