import LeftNevBar from "../../components/Admin/LeftNevBar";
import styles from "./DashBoradPage.module.less";

const DashBoradPage = () => {
  return (
    <div className={styles.dashBoradPage}>
      <LeftNevBar />
      <div>대시보드입니다.</div>
    </div>
  );
};

export default DashBoradPage;
