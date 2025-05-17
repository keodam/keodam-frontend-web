import LeftNavBar from "../../components/Admin/LeftNavBar";
import style from "./PayPage.module.less";

const PayPage = () => {
  return (
    <div className={style.payPage}>
      <LeftNavBar />
      결제, 환불, 환급을 처리하는 공간
    </div>
  );
};

export default PayPage;
