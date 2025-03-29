import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./MatchingPage.module.less";

const MatchingPage = () => {
  return (
    <div className={style.matchingPage}>
      <LeftNavBar />
      매칭 이력을 관리하는 공간입니다.
    </div>
  );
};

export default MatchingPage;
