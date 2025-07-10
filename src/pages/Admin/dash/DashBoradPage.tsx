import LeftNavBar from "../../../components/Admin/LeftNavBar";
import styles from "./DashBoradPage.module.less";
import DashCard from "./components/DashCard";
import { FaCheck, FaCoffee, FaFlag } from 'react-icons/fa';
import RequestSection from "./section/RequestSection";
import MatchingSection from "./section/MatchingSection";
import ComplainSection from "./section/ComplaintSection";

const DashBoradPage = () => {
  return (
    <div className={styles.dashBoradPage}>
      <LeftNavBar />
      <div className={styles.contents}>
        <div className={styles.title}>대시보드</div>
        <div className={styles.cards}>
          <DashCard icon={<FaCheck />} label="요청 현황" count="-" />
          <DashCard icon={<FaCoffee />} label="금일 매칭 현황" count="-" />
          <DashCard icon={<FaFlag />} label="신고현황/Q&A" count="-" />
        </div>
        <RequestSection/>
        <MatchingSection/>
        <ComplainSection/>
      </div>
    </div>
  );
};

export default DashBoradPage;
