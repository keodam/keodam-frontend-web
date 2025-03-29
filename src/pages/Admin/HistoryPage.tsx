import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./HistoryPage.module.less";

const HistoryPage = () => {
  return (
    <div className={style.historyPage}>
      <LeftNavBar />
      처리이력을 확인하는 공간입니다. 누가 언제 무엇을 처리했는지 책임소지를
      물을 수 있도록
    </div>
  );
};

export default HistoryPage;
