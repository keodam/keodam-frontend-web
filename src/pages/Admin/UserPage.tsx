import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./UserPage.module.less";

const UserPage = () => {
  return (
    <div className={style.userPage}>
      <LeftNavBar />
      유저를 관리하는 페이지입니다.
    </div>
  );
};

export default UserPage;
