import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./NoticePage.module.less";

const NoticePage = () => {
  return (
    <div className={style.noticePage}>
      <LeftNavBar />
      고객한테 알림을 보내고, 공지사항을 보내고, 인증을 확인할 수 있도록
    </div>
  );
};

export default NoticePage;
