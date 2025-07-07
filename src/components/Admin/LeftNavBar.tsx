import styles from "./LeftNavBar.module.less";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 로고 from "../../assets/Admin/navbar logo.svg";
import 화살표 from "../../assets/Admin/icon/add.png";
import 흰색화살표 from "../../assets/Admin/icon/addWhite.png";
import 아래흰색화살표 from "../../assets/Admin/icon/addWhiteChange.png";
import 로그아웃 from "../../assets/Admin/icon/logout.png";

const LeftNavBar = () => {
  const [isMatchingOpen, setIsMatchingOpen] = useState(false);
  const [isQnaOpen, setIsQnaOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [isPayOpen, setIsPayOpen] = useState(false);

  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter");

  const navigate = useNavigate();

  const handleMatchingClick = () => {
    setIsMatchingOpen(true);
    setIsQnaOpen(false);
    setIsNoticeOpen(false);
    setIsPayOpen(false);
    navigate("/matching?filter=커피챗 신청현황");
  };

  const handleSubMenuClick = (menu: string) => {
    navigate(`/matching?filter=${encodeURIComponent(menu)}`);
  };

  const handleQnaClick = () => {
    setIsMatchingOpen(false);
    setIsQnaOpen(true);
    setIsNoticeOpen(false);
    setIsPayOpen(false);
    navigate("/support?filter=Q&A");
  };

  const handleQnaSubMenuClick = (menu: string) => {
    navigate(`/support?filter=${encodeURIComponent(menu)}`);
  };

  const handleNoticeClick = () => {
    setIsMatchingOpen(false);
    setIsQnaOpen(false);
    setIsNoticeOpen(true);
    setIsPayOpen(false);
    navigate("/notice?filter=알림");
  };

  const handleNoticeSubMenuClick = (menu: string) => {
    navigate(`/notice?filter=${encodeURIComponent(menu)}`);
  };

  const handlePayClick = () => {
    setIsMatchingOpen(false);
    setIsQnaOpen(false);
    setIsNoticeOpen(false);
    setIsPayOpen(true);
    navigate("/pay?filter=결제");
  };

  const handlePaySubMenuClick = (menu: string) => {
    navigate(`/pay?filter=${encodeURIComponent(menu)}`);
  };

  return (
    <nav className={styles.leftNavBar}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <img src={로고} alt="로고" />
        </div>
        <div className={styles.name}>사용자 이름</div>

        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsTop}>
            {/* 대시보드 */}
            <div className={`${styles.buttonContainer} ${location.pathname === "/dash" ? styles.active : ""}`}>
              <div className={styles.button} onClick={() => navigate("/dash")}>
                대시보드
              </div>
            </div>

            {/* 고객관리 */}
            <div className={`${styles.buttonContainer} ${location.pathname === "/user" ? styles.active : ""}`}>
              <div className={styles.button} onClick={() => navigate("/user")}>
                고객관리
              </div>
            </div>

            {/* 매칭 */}
            <div className={`${styles.buttonContainer} ${(hoverTarget === "matching" || isMatchingOpen || location.pathname === "/matching") ? styles.active : ""}`}>
              <div
                className={styles.button}
                onClick={handleMatchingClick}
                onMouseEnter={() => setHoverTarget("matching")}
                onMouseLeave={() => setHoverTarget(null)}
              >
                <div>매칭</div>
                <div className={styles.icon}>
                  <img
                    src={
                      isMatchingOpen
                        ? 아래흰색화살표
                        : hoverTarget === "matching" || location.pathname === "/matching"
                        ? 흰색화살표
                        : 화살표
                    }
                    alt="화살표"
                  />
                </div>
              </div>

              {isMatchingOpen && (
                <div className={styles.buttonChange}>
                  <div className={`${styles.subMenuItem} ${filter === "커피챗 신청현황" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("커피챗 신청현황")}>커피챗 신청현황</div>
                  <div className={`${styles.subMenuItem} ${filter === "커피챗 거절" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("커피챗 거절")}>커피챗 거절</div>
                  <div className={`${styles.subMenuItem} ${filter === "커피챗 수락" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("커피챗 수락")}>커피챗 수락</div>
                  <div className={`${styles.subMenuItem} ${filter === "취소" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("취소")}>취소</div>
                  <div className={`${styles.subMenuItem} ${filter === "매칭 예정" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("매칭 예정")}>매칭 예정</div>
                  <div className={`${styles.subMenuItem} ${filter === "매칭 종료" ? styles.selected : ""}`} onClick={() => handleSubMenuClick("매칭 종료")}>매칭 종료</div>
                </div>
              )}
            </div>

            {/* Q&A/신고/탈퇴 */}
            <div className={`${styles.buttonContainer} ${(hoverTarget === "qna" || isQnaOpen || location.pathname === "/support") ? styles.active : ""}`}>
              <div
                className={styles.button}
                onClick={handleQnaClick}
                onMouseEnter={() => setHoverTarget("qna")}
                onMouseLeave={() => setHoverTarget(null)}
              >
                <div>Q&A/신고/탈퇴</div>
                <div className={styles.icon}>
                  <img
                    src={
                      isQnaOpen
                        ? 아래흰색화살표
                        : hoverTarget === "qna" || location.pathname === "/support"
                        ? 흰색화살표
                        : 화살표
                    }
                    alt="화살표"
                  />
                </div>
              </div>

              {isQnaOpen && (
                <div className={styles.buttonChange}>
                  <div className={`${styles.subMenuItem} ${filter === "Q&A" ? styles.selected : ""}`} onClick={() => handleQnaSubMenuClick("Q&A")}>Q&A</div>
                  <div className={`${styles.subMenuItem} ${filter === "신고" ? styles.selected : ""}`} onClick={() => handleQnaSubMenuClick("신고")}>신고</div>
                  <div className={`${styles.subMenuItem} ${filter === "탈퇴" ? styles.selected : ""}`} onClick={() => handleQnaSubMenuClick("탈퇴")}>탈퇴</div>
                </div>
              )}
            </div>

            {/* 알림/공지사항/인증 */}
            <div className={`${styles.buttonContainer} ${(hoverTarget === "notice" || isNoticeOpen || location.pathname === "/notice") ? styles.active : ""}`}>
              <div
                className={styles.button}
                onClick={handleNoticeClick}
                onMouseEnter={() => setHoverTarget("notice")}
                onMouseLeave={() => setHoverTarget(null)}
              >
                <div>알림/공지사항/인증</div>
                <div className={styles.icon}>
                  <img
                    src={
                      isNoticeOpen
                        ? 아래흰색화살표
                        : hoverTarget === "notice" || location.pathname === "/notice"
                        ? 흰색화살표
                        : 화살표
                    }
                    alt="화살표"
                  />
                </div>
              </div>

              {isNoticeOpen && (
                <div className={styles.buttonChange}>
                  <div className={`${styles.subMenuItem} ${filter === "알림" ? styles.selected : ""}`} onClick={() => handleNoticeSubMenuClick("알림")}>알림</div>
                  <div className={`${styles.subMenuItem} ${filter === "공지사항" ? styles.selected : ""}`} onClick={() => handleNoticeSubMenuClick("공지사항")}>공지사항</div>
                  <div className={`${styles.subMenuItem} ${filter === "인증" ? styles.selected : ""}`} onClick={() => handleNoticeSubMenuClick("인증")}>인증</div>
                </div>
              )}
            </div>

            {/* 결제/후원내역 */}
            <div className={`${styles.buttonContainer} ${(hoverTarget === "pay" || isPayOpen || location.pathname === "/pay") ? styles.active : ""}`}>
              <div
                className={styles.button}
                onClick={handlePayClick}
                onMouseEnter={() => setHoverTarget("pay")}
                onMouseLeave={() => setHoverTarget(null)}
              >
                <div>결제/후원내역</div>
                <div className={styles.icon}>
                  <img
                    src={
                      isPayOpen
                        ? 아래흰색화살표
                        : hoverTarget === "pay" || location.pathname === "/pay"
                        ? 흰색화살표
                        : 화살표
                    }
                    alt="화살표"
                  />
                </div>
              </div>

              {isPayOpen && (
                <div className={styles.buttonChange}>
                  <div className={`${styles.subMenuItem} ${filter === "결제" ? styles.selected : ""}`} onClick={() => handlePaySubMenuClick("결제")}>결제</div>
                  <div className={`${styles.subMenuItem} ${filter === "환불" ? styles.selected : ""}`} onClick={() => handlePaySubMenuClick("환불")}>환불</div>
                  <div className={`${styles.subMenuItem} ${filter === "환급" ? styles.selected : ""}`} onClick={() => handlePaySubMenuClick("환급")}>환급</div>
                </div>
              )}
            </div>

            {/* 처리 이력 */}
            <div className={`${styles.buttonContainer} ${location.pathname === "/history" ? styles.active : ""}`}>
              <div className={styles.button} onClick={() => navigate("/history")}>
                처리 이력
              </div>
            </div>

            {/* 커뮤니티 */}
            <div className={`${styles.buttonContainer} ${location.pathname === "/" ? styles.active : ""}`}>
              <div className={styles.button} onClick={() => navigate("/")}>
                커뮤니티
              </div>
            </div>
          </div>

          {/* 로그아웃 */}
          <div className={styles.buttonRow}>
            <div className={styles.buttonContainer}>
              <div className={styles.button} onClick={() => navigate("/login")}>
                <div>로그아웃</div>
                <div className={styles.icon}>
                  <img src={로그아웃} alt="로그아웃 아이콘" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavBar;
