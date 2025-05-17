import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./EventPage.module.less";

const EventPage = () => {
  return (
    <div className={style.eventPage}>
      <LeftNavBar />
      이벤트를 관리하는 페이지입니다.
    </div>
  );
};

export default EventPage;
