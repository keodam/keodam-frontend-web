import styles from "./LeftNavBar.module.less";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LeftNavBar = () => {
  const [userName, setUserName] = useState<string>("user");

  const navigate = useNavigate();
  const goDash = () => {
    navigate("../dash");
  };
  const goUser = () => {
    navigate("../user");
  };
  const goMatching = () => {
    navigate("../matching");
  };
  const goSupport = () => {
    navigate("../support");
  };
  const goNotice = () => {
    navigate("../notice");
  };
  const goEvent = () => {
    navigate("../event");
  };
  const goPay = () => {
    navigate("../pay");
  };
  const goHistory = () => {
    navigate("../history");
  };

  // 현재 로그아웃 기능은 따로 없고 그냥 navigate만 박아둠 나중에 수정
  const handleLogOut = () => {
    navigate("../login");
  };
  return (
    <nav className={styles.leftNavBar}>
      <div className={styles.contents}>
        <div className={styles.name}>{userName}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonsTop}>
            <div className={styles.button} onClick={goDash}>
              대시보드
            </div>
            <div className={styles.button} onClick={goUser}>
              고객관리
            </div>
            <div className={styles.button} onClick={goMatching}>
              매칭
            </div>
            <div className={styles.button} onClick={goSupport}>
              Q&A/신고/탈퇴
            </div>
            <div className={styles.button} onClick={goNotice}>
              알림/공지사항/인증
            </div>
            <div className={styles.button} onClick={goEvent}>
              이벤트 관리
            </div>
            <div className={styles.button} onClick={goPay}>
              결제/환급/후원
            </div>
            <div className={styles.button} onClick={goHistory}>
              처리 이력
            </div>
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.button} onClick={handleLogOut}>
              로그아웃
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavBar;
