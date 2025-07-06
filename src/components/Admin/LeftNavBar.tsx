import styles from "./LeftNavBar.module.less";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import 로고 from "../../assets/Admin/navbar logo.svg"
import 화살표 from "../../assets/Admin/icon/add.png"
import 흰색화살표 from "../../assets/Admin/icon/addWhite.png"
import 아래흰색화살표 from "../../assets/Admin/icon/addWhiteChange.png"
import 로그아웃 from "../../assets/Admin/icon/logout.png"
const LeftNavBar = () => {

  const [userName, setUserName] = useState<string>("사용자 이름");
  // hover(마우스가 올라갔을 때)이미지 변경
  // 클릭시 이미지 변경
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  const goCommunity = () =>{
    navigate("../")
  }

  const handleMatchingClick = () => {
    goMatching();
    setIsOpen(!isOpen);
  };

  // 현재 로그아웃 기능은 따로 없고 그냥 navigate만 박아둠 나중에 수정
  const handleLogOut = () => {
    navigate("../login");
  };
  return (
    <nav className={styles.leftNavBar}>
      <div className={styles.contents}>
        <div className={styles.logo}><img src={로고} alt="로고"/></div>
        <div className={styles.name}>{userName}</div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsTop}>
            <div className={styles.button} onClick={goDash}>
              대시보드
            </div>
            <div className={styles.button} onClick={goUser}>
              고객관리
            </div>
          <div className={`${styles.buttonContainer} ${isHover || isOpen ? styles.active : ""}`}>
            <div 
              className={styles.button}
              onClick={handleMatchingClick}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div>매칭</div>
              <div className={styles.icon}>
                <img src={isOpen ? 아래흰색화살표 : isHover ? 흰색화살표 : 화살표} alt="화살표" />
              </div>
            </div>
            {isOpen && (
              <div className={styles.buttonChange}>
                <div>커피챗 신청현황</div>
                <div>커피챗 거절</div>
                <div>커피챗 수락</div>
                <div>취소</div>
                <div>매칭 예정</div>
                <div>매칭 종료</div>
              </div>
            )}
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
            <div className={styles.button} onClick={goCommunity}>
              커뮤니티
            </div>
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.button} onClick={handleLogOut}>
              <div>로그아웃</div><div className={styles.icon}><img src={로그아웃} alt="로그아웃 아이콘"/></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavBar;