import LeftNavBar from "../../../components/Admin/LeftNavBar";
import UserTable from "./UserTable";
import style from "./UserPage.module.less";

const UserPage = () => {
  return (
    <div className={style.userPage}>
      <LeftNavBar />
      <div className={style.contents}>
      <div className={style.title}> 고객관리 </div>
      <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
