import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./SupportPage.module.less";

const SupportPage = () => {
  return (
    <div className={style.supportPage}>
      <LeftNavBar />
      Q&A/신고/탈퇴를 확인하는 공간입니다.
    </div>
  );
};

export default SupportPage;
