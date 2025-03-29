import styles from "./LeftNevBar.module.less";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LeftNevBar = () => {
  const [userName, setUserName] = useState<string>("user");

  const navigate = useNavigate();
  // 현재 로그아웃 기능은 따로 없고 그냥 navigate만 박아둠 나중에 수정
  const handleLogOut = () => {
    navigate("../login");
  };
  return (
    <nav className={styles.leftNevBar}>
      <div className={styles.contents}>
        <div className={styles.name}>{userName}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonsTop}>
            <div className={styles.button}>대시보드</div>
            <div className={styles.button}>고객관리</div>
            <div className={styles.button}>매칭</div>
            <div className={styles.button}>Q&A/신고/탈퇴</div>
            <div className={styles.button}>알림/공지사항/인증</div>
            <div className={styles.button}>이벤트 관리</div>
            <div className={styles.button}>결제/후원내역</div>
            <div className={styles.button}>처리 이력</div>
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

export default LeftNevBar;
