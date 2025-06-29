import LeftNavBar from "../../../components/Admin/LeftNavBar";
import styles from "./DashBoradPage.module.less";

const DashBoradPage = () => {
  return (
    <div className={styles.dashBoradPage}>
      <LeftNavBar />
      <div>대시보드입니다.</div>
    </div>
  );
};

export default DashBoradPage;
